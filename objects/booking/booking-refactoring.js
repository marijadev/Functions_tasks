"use strict";

(
    function () {

        const Continent = {
            EUROPE: 'EU',
            ASIA: 'AS',
            AFRICA: 'AF',
            SOUTH_AMERICA: 'SA',
            NORTH_AMERICA: 'NA',
            AUSTRALIA: 'AU'
        };

        Object.freeze(Continent);

        function Country(name, odds, continent) {
            this.name = (name[0] + name[1]).toUpperCase();
            this.odds = odds;
            this.continent = continent;
        }

        function Person(name, surname, dateOfBirth) {
            this.name = name;
            this.surname = surname;
            this.dateOfBirth = new Date(dateOfBirth);
        }
        Person.prototype.getAge = function () {
            var today = new Date().getTime();
            var age = today - this.dateOfBirth.getTime();
            return Math.floor(age / 31536000000);
        }
        Person.prototype.getPersonInfo = function () {
                return this.name + " " + this.surname + ", " + this.getAge();
            }

        function Player(person, betAmount, country) {
            this.countryName = country.name;
            this.countryOdds = country.odds;
            this.betAmount = betAmount;
            this.person = person;
        }
        
        Player.prototype.getPlayerInfo = function () {
            return this.countryName + ", " + this.countryOdds * this.betAmount + "eur, " + this.person.getPersonInfo();
        }

        function Address(country, city, postalCode, street, number) {
            this.country = country.name;
            this.city = city;
            this.postalCode = postalCode;
            this.street = street;
            this.number = number;
        }
        Address.prototype.getAddress = function () {
            return this.street + " " + this.number + ", " + this.postalCode + " " + this.city + ", " + this.country;
        }
        Address.prototype.getAddressSimple = function () {
            return this.street + ", " + this.postalCode + " " + this.city;
        }

        function BettingPlace(address, listOfPlayers) {
            this.address = address;
            this.listOfPlayers = [];
        }
        BettingPlace.prototype.addPlayers = function (player) {
            this.listOfPlayers.push(player);
        }
        BettingPlace.prototype.sumOfBettingPlace = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfPlayers.length; i++) {
                sum += this.listOfPlayers[i].betAmount;
            }
            return sum;
        }
        BettingPlace.prototype.bettingInfo = function () {
            return this.address.getAddressSimple() + ", sum of all bets: " + this.sumOfBettingPlace();
        }

        function BettingHouse(competition, listOfBettingPlaces, numberOfPlayers) {
            this.competition = competition;
            this.listOfBettingPlaces = [];
            this.numberOfPlayers = 0;
            this.numberOfBettingPlaces = 0;
        }
        BettingHouse.prototype.addBettingPlace = function (bettingPlace) {
            this.listOfBettingPlaces.push(bettingPlace);
            this.numberOfPlayers += bettingPlace.listOfPlayers.length;
            this.numberOfBettingPlaces++;
        }
        BettingHouse.prototype.getBettingHouseData = function () {
            var firstLine = this.competition + ", " + this.numberOfBettingPlaces + " betting places, " + this.numberOfPlayers + " bets" + "\n";
            var secondLine = "";

            for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
                secondLine += this.listOfBettingPlaces[i].bettingInfo() + '\n';

                for (var j = 0; j < this.listOfBettingPlaces[i].listOfPlayers.length; j++) {
                    secondLine += '\t' + this.listOfBettingPlaces[i].listOfPlayers[j].getPlayerInfo() + '\n';
                }
            }

            return firstLine + secondLine;
        }

        function createPlayer(person, betAmount, country) {
            return new Player(person, betAmount, country);
        }

        function createBettingPlace(address, players) {
            return new BettingPlace(address, players);
        }

        var country1 = new Country("Srbija", 3, Continent.EUROPE);

        var person1 = new Person("Pera", "Peric", "1989-01-31");
        var person2 = new Person("Marko", "Markovic", "1988-02-30");
        var person3 = new Person("Milos", "Milosevic", "1987-03-29");
        var person4 = new Person("Petar", "Petrovic", "1984-05-01");


        var player1 = createPlayer(person1, 200, country1);
        var player2 = createPlayer(person2, 10, country1);
        var player3 = createPlayer(person3, 20, country1);
        var player4 = createPlayer(person4, 30, country1);

        var address1 = new Address(country1, "Beograd", 11000, "Nemanjina", 4);
        var address2 = new Address(country1, "Dablin", 12313, "Dablinska ulica", 3);

        var bettingPlace1 = createBettingPlace(address1, "");
        var bettingPlace2 = createBettingPlace(address2, "");


        bettingPlace1.addPlayers(player1);
        bettingPlace1.addPlayers(player2);
        bettingPlace1.addPlayers(player3);

        bettingPlace2.addPlayers(player3);
        bettingPlace2.addPlayers(player4);
        bettingPlace2.addPlayers(player1);

        var newBettingHouse = new BettingHouse("Football World Wide");
        newBettingHouse.addBettingPlace(bettingPlace1);
        newBettingHouse.addBettingPlace(bettingPlace2);

        console.log(newBettingHouse.getBettingHouseData());
        // console.log(player1.getPlayerInfo())

    }
)();
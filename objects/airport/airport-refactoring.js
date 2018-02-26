"use strict";
(
    function () {

        function Person(name, surname) {
            this.name = name;
            this.surname = surname;
        }
        Person.prototype.getData = function () {
            return this.name + " " + this.surname;
        }

        function Seat(number, category) {
            this.number = number || Math.round(Math.random() * (100 - 10) + 10);
            this.category = category || "e";
        }
        Seat.prototype.getData = function () {
            return this.number + ", " + this.category.toUpperCase();
        }

        function Passenger(name, surname, seat) {
            this.name = name;
            this.surname = surname;
            this.seat = seat;
        }
        Passenger.prototype.getData = function () {
            return this.seat.getData() + ", " + this.name + ' ' + this.surname;
        }

        function Flight(relation, date) {
            this.relation = relation;
            this.date = new Date(date);
            this.listOfPassengers = [];
        }
        Flight.prototype.getData = function () {
            var months = ["Jan", "Feb", "Mar", "Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            var day = this.date.getDate();
            var monthIndex = this.date.getMonth();
            var year = this.date.getFullYear();
            var formattedDate = day + ", " + months[monthIndex] + ", " + year;

            return formattedDate + " " + this.relation;
        }
        Flight.prototype.addPassenger = function (passenger) {
            this.listOfPassengers.push(passenger);
        }
        Flight.prototype.getPassengersList = function () {
            var list = "";
            for (var i = 0; i < this.listOfPassengers.length; i++) {
                list += this.listOfPassengers[i].getData() + "\n";
            }
            return list;
        }

        function Airport() {
            this.name = "Nikola Tesla";
            this.listOfFlights = [];
            this.totalPassengers = 0;

        }
        Airport.prototype.addFlight = function (flight) {
            this.listOfFlights.push(flight);
            this.totalPassengers += flight.listOfPassengers.length;
        }
        Airport.prototype.getData = function () {
            var airportInfo =  "Airport: " + this.name + ", total passengers: " + this.totalPassengers + "\n";
            var info = "";
            for (var  i = 0; i < this.listOfFlights.length; i++) {
                info += this.listOfFlights[i].getData() + "\n";
                info += this.listOfFlights[i].getPassengersList() + "\n";
            }
            return airportInfo + info;
        }

        function createFlight(relation, date) {
            return new Flight(relation, date);
        }

        function createPassenger(name, surname, number, category) {
            return new Passenger(name, surname, number, category);
        }

        function createSeat(number, category) {
            return new Seat(number, category);
        }

        var seat1 = createSeat(14, "b");
        var seat2 = createSeat(11, "e");
        var seat3 = createSeat(75, "b");
        var seat4 = createSeat(1, "b");

        var passenger1 = createPassenger("Jessica", "Alba", seat1);
        var passenger2 = createPassenger("Julia", "Roberts", seat2);
        var passenger3 = createPassenger("Matt", "Damon", seat3);
        var passenger4 = createPassenger("Robbie", "Williams", seat4);

        var airport1 = new Airport();

        var flight1 = createFlight("Belgrade - Paris", "2018-09-05");
        var flight2 = createFlight("Barcelona - Belgrade", "2018-04-12");

        flight1.addPassenger(passenger1);
        flight1.addPassenger(passenger2);
        flight2.addPassenger(passenger3);
        flight2.addPassenger(passenger4);

        airport1.addFlight(flight1);
        airport1.addFlight(flight2);

        console.log(airport1.getData());


    }
)();
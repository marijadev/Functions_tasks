function Person(name, surname, yearOfBirth) {
    this.firstName = name;
    this.lastName = surname;
    this.calculateAge = function () {
        var currentYear = new Date();
        var year = currentYear.getFullYear();
        var result = year - yearOfBirth;
        return result;
    }
    this.info = function () {
        return "My name is " + this.firstName + " " + this.lastName + " and I'm " + this.calculateAge() + " years old."
    }
};
var marija = new Person("Marija", "Kovacevic", 1989);
console.log(marija.info());

var ivana = new Person("Ivana", "Markovic", 1982);
console.log(ivana.info());

var a = marija;

console.log(a)

a.firstName = "Jovana";

console.log(a)
console.log(marija)

a instanceof Person;


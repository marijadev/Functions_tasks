"use strict";
// Write a function that checks if a given string is written in all capitals.
// Write a function that checks if a given string contains any digits.
// Write a function that checks if a given string is a valid hexadecimal color.
// Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
// Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function stringValidator(str) {
    return str === str.toUpperCase();
}
// console.log(stringValidator("capitals"));

function passwordValidator(str) {
    return /\d/.test(str);
}
// console.log(passwordValidator("1gh2hhh3jk1"));

function colorValidator(str) {
    return /^#[0-9A-F]{6}$/i.test(str) || /^#[0-9A-F]{3}$/i.test(str);
}
// console.log(colorValidator("#f0a"));

function yearValidator(num) {
    return num >= 1900 && num <= 2018;
}
// console.log(yearValidator(1980));

function Validator(str) {
    this.stringValidator = stringValidator(str);
    this.passwordValidator = passwordValidator(str);
    this.colorValidator = colorValidator(str);
    this.yearValidator = yearValidator(str);
}

console.log(new Validator("#197"));
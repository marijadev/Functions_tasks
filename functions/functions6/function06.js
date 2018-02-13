"use strict";
// Write a function to input temperature in Centigrade and convert to Fahrenheit.

// fahrenheit 32 freeze, 212 boil
// centigrade 0 freeze, 100 boil

var centigradeToFahrenheit = function (input) {
    var singleFahrenheit = (212 - 32) / 100;
    var result = 0;
    if (input === 0) {
        result = 32;
        return result;
    }
    return result = (input * singleFahrenheit) + 32;
}

console.log(centigradeToFahrenheit(0));
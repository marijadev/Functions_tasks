"use strict";

// Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"

function capitalizeFirstLetter(str) {
    var newLetter = str[0].toUpperCase();
    var newString = str.substring(1);

    return newLetter + newString;
}

console.log(capitalizeFirstLetter("js string exercises"));

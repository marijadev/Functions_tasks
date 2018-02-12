"use strict";

// Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false


function isStringBlank(input) {
    if(input === " ") {
        return false;
    } else {
        return true;
    }
}

console.log(isStringBlank("My random string"));

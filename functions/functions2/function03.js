"use strict";

// Write a function that concatenates a given string n times (default is 1).
// "Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function concatenateInput(input, num) {
    if(num === 0 || typeof num === "undefined") {
        num = 1;
    }

    var buffer = "";
    for (var i = 0; i < num; i++) {
        buffer += input;         
    }
    return buffer;
}

console.log(concatenateInput("Ha"));


"use strict";

// Write a JavaScript function that reverses a number.

// 	12345 -> 54321

function reverse(num) {
    var str = String(num);
    return str.split("").reverse().join("");
}

console.log(reverse(12345));


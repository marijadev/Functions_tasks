"use strict";

// Write a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false


function isInputString(input) {
    if(typeof input === "string") {    
        return "This 'input' is typeof string."
    } else {
        return "This 'input' is not typeof string";
    }
}

console.log(isInputString("My random string."));

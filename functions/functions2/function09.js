"use strict";

// 9.  Write a function that replaces spaces in a string with provided separator. 
// If separator is not provided, use “-” (dash) as the default separator.

// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string"

function replaceSpacesWithSeparator(input, separator) {
    var defaultSep = "-";
    var tempResult = "";

    separator = separator || defaultSep;

    for (var i = 0; i < input.length; i++) {
        if(input[i] === " ") {
            tempResult+= separator;
        } else {
            tempResult+= input[i];
        }
    }
    return tempResult;
}
console.log(replaceSpacesWithSeparator("My random string", "+"));

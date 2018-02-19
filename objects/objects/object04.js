"use strict";

// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

function alphabetizeWords(str) {
    var output = str.toLowerCase().split(" ");
    var newStr = [];
    

    for (var i = 0; i < output.length; i++) {
        newStr[i] = output[i].split("").sort().join("");
    }
    
    return newStr.toString();
}

console.log(alphabetizeWords("My random string"));
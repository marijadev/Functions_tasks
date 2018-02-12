"use strict";

// Write a program to insert a string within a string at a particular position 
// (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function stringWithinString(str1, str2, index) {
    var tempStr = '';

    for (var i = 0; i < str1.length; i ++) {
        if (i == index) {
            tempStr += str2;
        }
        tempStr += str1[i];
    }

    console.log(tempStr);
}   

stringWithinString("My random string", "JS ", 10);

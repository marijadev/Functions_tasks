"use strict";

// Write a function to convert a string to its abbreviated form. 
// 	"John Snow" -> 	"John S."

function abbreviatedString(str) {
    var result = "";
    var strDot = ".";
    result = str.split(' ');
    var firstWord = result[0];
    var secondWord =  result[1][0];
    var output = firstWord + " " + secondWord + strDot;

    return output;
}
console.log(abbreviatedString("John Snow"));
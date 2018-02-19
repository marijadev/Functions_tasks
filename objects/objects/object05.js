"use strict";

// Write a function to split a string and convert it into an array of words.

// 	"John Snow" -> [ 'John', 'Snow' ]
function convertToArray(str) {
    var result = [];
    
    result = str.split(' ');
    return result;
}
console.log(convertToArray("John Snow"));
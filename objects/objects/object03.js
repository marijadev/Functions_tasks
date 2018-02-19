"use strict";

// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

// “Webmaster” -> “abeemrstw”

function alphabeticalOrder(str) {
    var output = str.toLowerCase().split('').sort().join('');
    return output;
}
console.log(alphabeticalOrder("Webmaster"));


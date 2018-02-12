"use strict";

// 7. Write a function to convert string into an array. 
// Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]
function stringToArray(str) {
    var arr = [];

    for (var i = 0; i < str.length; i++) {
        if(str[i] === " ") {
            arr[i] = null;
        } else {
            arr[i] = str[i];
        }
    } 
    return arr;
}
console.log(stringToArray("My random string"));

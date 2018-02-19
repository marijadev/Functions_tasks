"use strict";
// Write a function to convert a number from one base (radix) to another. 
// Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

// 'ff', 16, 8 -> 377


function convert (num, redix) {
    var str = String(num);
    var result = parseInt(str, redix);
    return result;
}

console.log(convert(377, 16));
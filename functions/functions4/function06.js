"use strict";

// Write a program that checks if a given array is symmetric. 
// An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

function isArraySymmetric(arr) {
    var result = "";

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[arr.length - 1 - i]) {
            result = "This array is symmetric.";
        } else {
            result = "This array is not symmetric";
            break;
        }
    }
    return result;
}
console.log(isArraySymmetric([2, 4, -2, 2, 7, 2, -2, 4, 2]));

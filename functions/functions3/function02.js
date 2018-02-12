"use strict";

// Write a program to join all elements of the array into a string skipping elements that are 
// undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function joinElementsIntoArray(arr) {
    var finalString = "";
    
    for (var i = 0; i < arr.length; i++) {
        if(typeof arr[i] !== "undefined" && arr[i] !== null && !isNaN(arr[i]) && arr[i] !== Infinity) {
            finalString += arr[i];
        }
    }
    return finalString;
}
console.log(joinElementsIntoArray([NaN, 0, 15, false, -22, '', undefined, 47, null]));

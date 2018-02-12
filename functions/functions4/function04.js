"use strict";

// Write a program that finds the second largest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2

function secondLargestNumber(arr) {
    var max = arr[0];
    var secondMax = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    for (var j = 0; j < arr.length; j++) {
        if (secondMax > arr[i] && secondMax < max) {
            secondMax = arr[i];
        }        
    }
    return secondMax;
}   
console.log(secondLargestNumber([4, 2, 2, -1, 6]));

"use strict";

// Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function minimumOfArray(arr) {
    var minimum = arr[0];
    var index = 0;

    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < minimum){
            minimum = arr[i];
            index = i;
        }        
    }
    return minimum + ", " + index;
}

console.log(minimumOfArray([4, 2, 2, -1, 6]));

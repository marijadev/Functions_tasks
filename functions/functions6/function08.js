"use strict";
// Write a function to find the maximum and minimum elements. Function returns an array.

var maxAndMinElements = function(arr) {
    var bufferMin = arr[0];
    var bufferMax = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if ( arr[i] > bufferMax ) {
            bufferMax = arr[i];
        }
        if ( arr[i] < bufferMin ) {
            bufferMin = arr[i];
        }
    }
    return bufferMax;
}

console.log(maxAndMinElements([3, 2, 65, 45, 18, 11]));
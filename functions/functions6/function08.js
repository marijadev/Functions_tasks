"use strict";
// Write a function to find the maximum and minimum elements. Function returns an array.

var maxAndMinElements = function(arr) {
    var output = [];
    var counter = 0;
    var min = 0;
    var max = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var k = 0; k < arr.length; k++) {
            if (arr[i] > arr[k] && arr[i] > max) {
                max = arr[i];
               
            }
            if (arr[i] < arr[k] && arr[i] < min) {
                min = arr[i];
            }
        }
    }
    return min;
}

console.log(maxAndMinElements([3, 2, 65, 45, 18, 11]));

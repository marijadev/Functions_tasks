"use strict";
// Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

var rotateElements = function (arr, k) {
    var counter = 0;
    var output = [];
    var counterTwo = 0;
    var outputTwo = [];

    for (var i = 0; i < arr.length; i++) {
        if (i < k) {
            outputTwo[counterTwo] = arr[i];
            counterTwo++;
            console.log(outputTwo);
        } else if (i >= k) {
            output[counter] = arr[i];
            counter++;
            console.log(output);
        }
    }
    return output.concat(outputTwo);
}

console.log(rotateElements([1, 2, 3, 4, 5, 6], 2));


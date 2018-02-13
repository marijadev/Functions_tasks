"use strict";
// Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

var maxElement = function (arr) {
    var outputArr = [];
    var counter = 0;
    var max = 0;

    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            outputArr[counter] = arr[i];
            counter++
        }
    }

    for (var j = 0; j < outputArr.length; j++) {
        for (var k = 0; k < outputArr.length; k++) {
            if (outputArr[j] > outputArr[k] && outputArr[j] > max) {
                max = outputArr[j];
                // console.log(max, outputArr[j], outputArr[k]);
            }
        }
    }
    return max;
}

console.log(maxElement([18, 40, 9, 660, "a", null, 51, 103]));
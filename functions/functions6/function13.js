"use strict";

// Write a function to find all the numbers greater than the average.

var numGreaterThanAverage = function (n) {
    var sum = 0;
    var result = 0;
    var greaterNums = [];
    var counter = 0;

    for (var i = 0; i < n.length; i++) {
        sum += n[i];
    }
    result = sum / n.length;

    for (var j = 0; j < n.length; j++) {
        if (result < n[j]) {
            greaterNums[counter] = n[j];
            counter++;
        }
    }
    return greaterNums;
}
console.log(numGreaterThanAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

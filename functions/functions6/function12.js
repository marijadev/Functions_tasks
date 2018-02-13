"use strict";
// Write a function to find the average of N elements. 
// Make the function flexible to receive dynamic number or parameters.

var averageValue = function (n) {
    var sum = 0;
    var result = 0;

    for (var i = 0; i < n.length; i++) {
        sum += n[i];
    }
    result = sum / n.length;
    return result;
}
console.log(averageValue([1,2,3,4,5,6,7,8,9,10]));

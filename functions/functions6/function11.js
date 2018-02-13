"use strict";
// Write a function to find and return the first, middle and last element of an array 
// if the array has odd number of elements. 
// If number of elements is even, return just the first and the last. 
// In other cases (empty array), input array should be returned.

var evenOddElements = function (arr) {
    var oddMiddleElementIndex = (arr.length + 1) / 2 - 1;
    var output = "";

    for (var i = 0; i < arr.length; i++) {
        if (arr.length % 2 !== 0) {
            output = arr[0] + ", " + arr[oddMiddleElementIndex] + ", " + arr[arr.length - 1];
            return output;
        } else if (arr.length % 2 === 0) {
            output = arr[0] + ", " + arr[arr.length - 1];
            return output;
        } else {
            output = [];
            return output;
        }
    }
}
console.log(evenOddElements(["a", 3, "b", 4, "c", 5, "d"]));

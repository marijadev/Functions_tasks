"use strict";
// Write a function that takes a number and returns array of its digits.

var arrayOfDigits = function(nums) {
    var stringNums = nums.toString();
    var outputArray = [];

    for (var i = 0; i < stringNums.length; i++) {
        outputArray[i] = parseInt(stringNums[i]);
        
    }
    return outputArray;
}
console.log(arrayOfDigits(6748932072));

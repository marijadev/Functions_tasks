"use strict";

// Write a function that says whether a number is perfect.

// 28 -> 28 is a perfect number.

function isNumberPerfect(num) {
    var sum = 0;

    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum / 2 == num;
}
    
console.log(isNumberPerfect(28));
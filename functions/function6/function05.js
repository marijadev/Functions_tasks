"use strict";
// Write a program that prints a multiplication table for numbers up to 12.

var multiplicationTable = function() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var output = [];

    for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers.length; j++) {
            output = numbers[i] * numbers[j];  
            console.log(numbers[i] + " * " + numbers[j] + " is " + output);    
        }
    }
}
multiplicationTable();
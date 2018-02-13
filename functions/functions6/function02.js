"use strict";
// Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

var combiningArrays = function (arr1, arr2) {
    var outputArray = [];
    var counter = 0;

    for (var i = 0; i < arr1.length; i++) {
        outputArray[counter] = arr1[i];
        counter++;
        outputArray[counter] = arr2[i];
        counter++
    }
    return outputArray;
} 

console.log(combiningArrays(["a","b","c"], [1,2,3]));
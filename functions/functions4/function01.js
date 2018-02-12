"use strict";

// Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no

function isElementPartOfArray(arr, e) {
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === e) {
            result = "yes";
            break;
        } else {
            result = "no";
        }
    }return result;
}
console.log(isElementPartOfArray([5, -4.2, 3, 7], 7));
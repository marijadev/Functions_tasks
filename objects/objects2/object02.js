// 2. Write a functional expression that removes all duplicates in a given array.
//    Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
//    Output: [1, 4, 8, 9, 12, 13] 
"use strict";

function removeDuplicateElements(array) {
    var newArray = [];
    array = array.sort();

        for (let i = 0; i < array.length; i++) {
            if (array[i] !== array[i+1]) {
                newArray.push(array[i]);
            }
        }
    return newArray.sort(function(a, b){return a - b});
}

console.log(removeDuplicateElements([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

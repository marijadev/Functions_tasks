// 4. Write a function that finds the smallest element of a given array. 
//    The function should return an object that contains the smallest value and its last position in the array.
//    Input: [1, 4, -2, 11, 8, 1, -2, 3]
//    Output:  { minValue: -2, minLastIndex: 6 }
"use strict";

function smallestElementPosition(array) {
    var buffer = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[0]) {
            buffer = array[i];
        }      
    }

    var result = array.lastIndexOf(buffer);
    var object = {
        minValue: buffer,
        minLastIndex: result
    }
    
    return object;
}

console.log(smallestElementPosition([1, 4, -2, 11, 8, 1, -2, 3]));

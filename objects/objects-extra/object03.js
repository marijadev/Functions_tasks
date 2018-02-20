// 3. a. Write a function that checks if a given array has odd number of elements.
//       Input: [1, 2, 9, 2, 1]
//       Output: true

//    b. Write a function that counts the number of elements less than the middle element.
//       If the given array has an even number of elements, print out an error message. 
//       Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
//       Output: 4
"use strict";

function name(array) {
    var middleElementIndex = (array.length - 1) / 2;
    array.sort(function(a, b){return a - b});

    if (isOdd(array)) {
        return array.indexOf(array[middleElementIndex]);
    } else {
        return "Error!";
    }

}

console.log(name([-1, 8.1, 3, 6, 2.3, 44, 2.11]));



function isOdd(array) {

    return array.length % 2 !== 0;
}
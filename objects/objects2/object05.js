// 5. Write a function that finds all the elements in a given array less than a given element. 
//    Input: [2, 3, 8, -2, 11, 4], 6 
//    Output: [2, 3, -2, 4]

//    Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive.
//    Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
//    Output: [’Programming’, ‘product’]

// Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 
"use strict";

// function elementsLessThanElement(array, number) {

//     var outputArray = [];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < number) {
//             outputArray.push(array[i]);
//         }
//     }
//     return outputArray;
// }

// console.log(elementsLessThanElement([2, 3, 8, -2, 11, 4], 6));

function elementsThatStartWithPro(array, callback) {

    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            if (array[i].toLowerCase().substring(0, 3) === "pro") {
                newArray.push(array[i]);
            }
        }
    }
    return newArray;
}

console.log(elementsThatStartWithPro(["JavaScript", "Programming", "fun", "product"], isLowerCase));

function isLowerCase(string) {
    var newString = string.toLowerCase();
    return newString === string;
}
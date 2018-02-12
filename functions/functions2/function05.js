"use strict";

// 5. Write a function to find the position of the first occurrence of a character in a string.
//    The result should be in human numeration form. 
// If there are no occurrences of the character, the function should return -1.

function firstCharOccurrence(input, character) {
    var result = 0;

    for (var i = 0; i < input.length; i++) {
        if(character === input[i]) {
            result = i + 1;
            return result;
        } else {
            result -1;
        }
    } 
    return result;
}

console.log(firstCharOccurrence("Marija", "a"));






// function firstOccurrence(input, letter) {
//     var result = 0;

//     for (var i = 0; i < input.length; i++ ) {
//         if(input[i] === letter) {
//             result = i + 1;
//             return result;
//         } else {
//             result = -1;
//         }
//     } 
//     return result;
// }

// console.log(firstOccurrence("Laboratory", "a"));

"use strict";

// 6. Write a function to find the position of the last occurrence of a character in a string.
//    The result should be in human numeration form. 
// If there are no occurrences of the character, function should return -1.

function positionOfLastOccurrence(input, letter) {
    var position = -1;

    for (var i = input.length; i >= 0; i--) {
        if(letter === input[i]) {
            position = i + 1;
            return position;
        }
    }
    return position;
}

console.log(positionOfLastOccurrence("My random string", "n"));
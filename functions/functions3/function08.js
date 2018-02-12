"use strict";

// Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"


function findWordWithinString(str, word) {
    var tempResult = 0,
        arr = str.split(', ');

    console.log(arr);

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            tempResult ++;
        }
    }

    if (tempResult > 0) {
        console.log (word + " was found " + tempResult + " times.");
    } else {
        console.log('cao.')
    }
    return tempResult;
}
findWordWithinString('aa, bb, bb, cc, dd, aa', 'bb');
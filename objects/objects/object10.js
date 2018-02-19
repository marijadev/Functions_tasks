"use strict";

// Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

function swapFirstCase(str) {
    var splitStr = str.split('');
    var character = splitStr;
    
    for (var i = 0; i < splitStr.length; i++) {
        if (character[i] !== character[i].toUpperCase()) {
            character[i].toLowerCase();
        } else {
            character[i].toUpperCase();
        }
    }
    return character.join('');

}


console.log(swapFirstCase('The Quick Brown Fox'));
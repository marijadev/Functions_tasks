"use strict"
// Write a program that takes a string and prints its characters out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

function reversedString(input) {
    var outputStr = "";

    for (var j = input.length - 1; j >= 0; j--) {
        outputStr += input[j];
    }        
    return outputStr;
}

console.log(reversedString("Belgrade Institute of Technology"));

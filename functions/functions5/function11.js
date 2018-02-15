"use strick";

// Check if a given string is a palindrome.
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true

function palindromeCheck(word) {
    var input = word.toLowerCase();

    for (var i = 0; i < input.length; i++) {
        if (input[i] === input[input.length - 1]) {
            return "This is a palyndrome."
        } else {
            return "This is not a palyndrome.";
        }
    }
}

console.log(palindromeCheck("Gegeg"));

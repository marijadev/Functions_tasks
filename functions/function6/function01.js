"use strict";
// Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.

// function countVowels(input, vowels) {
//     var output = 0;

//     for (var i = 0; i < input.length; i++) {
//         if(vowels.indexOf(input[i]) !== -1){
//             output ++;
//         }
//     }
//     return output;
// }

// console.log(countVowels("laboratorija", "aeiouAEIOU"));


var countVowels = function(input, vowels) {
    var output = 0;

    for (var i = 0; i < input.length; i++) {
        if(vowels.indexOf(input[i]) !== -1){
            output ++;
        }
    }
    return output;
}

console.log(countVowels("laboratorija", "aeiouAEIOU"));


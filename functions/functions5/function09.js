"use strict";

// Write a program that displays all the combinations of two numbers between 1 and 7. 
// Don't display two of the same numbers at the same time. 
// Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

function numbersCombination(a, b) {
    var result = "";

    for (var i = 0; i < 7; i++) {
        result = (a + "." + b + ", " + b + "." + a); 
    }
    return result;

}

console.log(numbersCombination(5, 4));

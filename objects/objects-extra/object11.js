// Write a function that generates a random integer value between 5 and 20.
// Write a function that generates a random integer value between 50 and 100. 
// Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.    
"use strict";

var n1 = randomInteger(5,20);
var n2 = randomInteger(50,100);

function randomInteger(min, max) {
    return (max - min) * Math.random() + min;
}
console.log(randomInteger());


"use strict";
// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


function tellFortune(x, y, z, n) {
    return "You will be a " + n + " in " + z + ", and married to " + y +" with " + x + " kids."; 
}

console.log(tellFortune(4, "Max", "Island", "chef"));
console.log(tellFortune(2, "Lilly", "Finland", "clerk"));
console.log(tellFortune(0, "Power Ranger", "Hellion", "astronaut"));
console.log(tellFortune(3, "Synthia", "Russia", "writer"));








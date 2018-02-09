// Write a function that calculates the number of appearances of a letter a in a given string. 
// Modify the function so it calculates the number of both letters a and A.

function letterAppearLength(input) {
    var counter = 0;

    for (var i = 0; i < input.length; i++) {
        if(input[i] === "a" || input[i] === "A") {
            counter ++;
            console.log( "Will add to counter.");
        } else {
            console.log( "This letter does not appear in this string.");
        }
    }
    return counter;
}

console.log(letterAppearLength("Marija"));

// Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2


function letterOccurrences(input) {
    var counter = 0;

    for (var i = 0; i < input.length; i++) {
        if("r" === input[i]) {
            counter++;
        } else {
            console.log("This letter is not in this string.");
        }
    }
    return counter;
}

console.log(letterOccurrences("My random string"));



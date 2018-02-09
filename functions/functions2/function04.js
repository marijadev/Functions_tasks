// Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function letterCount(input, letter) {
    var result = 0;
    for(var i = 0; i < input.length; i++) {
        if(letter === input[i]) {
            result += 1;
        }
    }
    return result;
}
console.log(letterCount("Laboratory", "a"));


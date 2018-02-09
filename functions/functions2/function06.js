// 6. Write a function to find the position of the last occurrence of a character in a string.
//    The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

function lastOccurrence(input, letter) {
    var result = 0;

    for (var i = input.length; i >= 0; i--) {
        if(input[i] === letter) {
            result = i + 1;
            break; 
        } else {
            result = -1;
        }
    }
    return result;
}

console.log(lastOccurrence("Laboratory", "l"));
 
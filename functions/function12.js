// Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function blankString(input) {
    if(input === " ") {
        return true;
    } else {
        return false;
    }
}

console.log(blankString(" "));



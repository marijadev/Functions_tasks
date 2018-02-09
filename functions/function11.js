// Write a function that concatenates a given string given number of times. 
// For example, if “abc” and 4 are given values, the function prints out abcabcabcabc. 

function concatenateString(input, num) {
    var buffer = "";

    for(var i = 0; i < num; i++) {
        buffer += input;
    }
    return buffer
}

console.log(concatenateString("abc", 3));




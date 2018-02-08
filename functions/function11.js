function concatenateString(input, num) {
    var buffer = "";

    for(var i = 0; i < num; i++) {
        buffer += input;
    }
    return buffer
}

console.log(concatenateString("abc", 3));
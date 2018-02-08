function letterLength(input) {
    var counter = 0;

    for (var i = 0; i < input.length; i++) {

        if (input[i] === "h" || input[i] === "y") {
            counter++;
        }
    }
    return counter;
}

console.log(letterLength("Ah random string"));
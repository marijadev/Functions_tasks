// 7. Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

function stringToArray(input) {
    var arr = [];

    for (let i = 0; i < input.length; i++) {
        arr[i] = input[i]; 
    } return arr;
}

console.log(stringToArray("My random string."));


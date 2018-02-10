// Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number

function reverseNumber(num) {
    var numString = num.toString();
    var stringResult = "";

    for (var i = numString.length - 1; i >= 0; i--) {
        console.log(numString[i]);
        stringResult += parseInt(numString[i]);
    }
    return stringResult;
}

console.log(reverseNumber(12345));

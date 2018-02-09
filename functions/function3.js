// Write a function that checks if a given number is a three digit long number.

function threeDigitLongNum(num) {
    if((num > 99 && num < 1000) || (num < -99 && num > -1000)) {
        return "The number " + num + " is a three digit number.";
    } else {
        return "The number " + num + " is not a three digit number.";
    }
}

console.log(threeDigitLongNum(-665));
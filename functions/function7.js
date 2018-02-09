// Write a function that calculates a number of digits of a given number. 

function numOfDigits(num) {
    var result = 0;

    do {
        result ++;
        num /= 10;
    } while (parseInt(num) > 0)

    return result;
}

console.log(numOfDigits(1000));
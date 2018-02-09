// Write a function that calculates the maximum of two given numbers. 

function maxNumber(num1, num2) {
    if(num1 > num2) {
        return num1 + " is bigger than " + num2;
    } else {
        return num2 + " is bigger than " + num1;
    }
}

console.log(maxNumber(12, -16));


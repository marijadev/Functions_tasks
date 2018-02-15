"use string";

// Write a program that calculates the greatest common divisor of two integers. 
// Note: The greatest common divisor of two non-zero integers is the greatest positive number 
// that divides both numbers with no remainder.
// Input:  192 42 | 81 9
// Output: 6      | 9

function greatestCommonDivisor(num1, num2) {
    var smallerNum;
    var greaterNum;
    var result = 1;
    var tempResult;

    if (num1 > num2) {
        greaterNum = num1;
        smallerNum = num2;
    } else {
        smallerNum = num1;
        greaterNum = num2;
    }

    for (var i = 1; i <= smallerNum; i++) {
        if (smallerNum % i === 0 && greaterNum % i === 0) {
            tempResult = i;
        }
        if (tempResult > result) {
            result = tempResult;           
        }
    }
    return result;
}
console.log(greatestCommonDivisor(12, 11));


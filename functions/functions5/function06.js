// Write a program that uses a loop to add all the even numbers from 1 to 1000 
// and subtracts all the odd numbers 1 to 500 from the calculated sum. 
// The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000

function calculateSum() {
    var evenSum = 0;
    var oddSum = 0;
    var result = 0;

    for (var i = 1; i <= 1000; i++) {
        if ( i % 2 == 0 ) {
            evenSum += i;
        }
    }

    for (var j = 1; j <= 500; j++) {
        if ( j % 2 != 0 ) {
            oddSum += j;
        }
    }

    result = (evenSum - oddSum) * 12.5;
    return result;
}

console.log(calculateSum());
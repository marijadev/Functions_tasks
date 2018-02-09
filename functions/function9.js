// Write a function that calculates the sum of odd elements of a given array. 

function sumOfOddElements() {
    var arr = [1, 2, 3, 4, 7];
    var oddNumberSum = 0;

    for (var i = 0; i < arr.length; i++) {

        if(arr[i] % 2 !== 0 ) {
            oddNumberSum += arr[i];
        }
    } return oddNumberSum;
}
console.log(sumOfOddElements());




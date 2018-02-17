// Write a function that checks if a given number is odd.

function oddNumber(num) {
    if(num % 2 === 0) {
        return num + " is an even number.";
    } else {
        return num + " is an odd number";
    }
}

console.log(oddNumber(-6));


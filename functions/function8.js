// Write a function that calculates a number of appearances of a given number in a given array.

function numAppearances(num) {
    var arr = [5, 4, 67, 33, 4, 15, 4];
    var buffer = 0;

    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === num) {
            buffer ++;
        }
    }
    return buffer;
}

console.log(numAppearances(4));
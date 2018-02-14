// "use strict";
// Write a function to find the median element of array.

var medianElement = function (arr) {
    var n = arr.length;
    var index;
    var sortedArr = arr.sort(function(a, b){return a - b});

    if ( n % 2 === 0 ) {
        index = n / 2 - 1;
    } else {
        index = (n + 1) / 2 - 1;
    }
    return sortedArr[index];
}

console.log(medianElement([1,2,3,4,5,6]));
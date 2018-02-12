"use strict";

// Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function mostFrequentItem(arr) {
    var counter = 0,
        buffer = 0,
        item;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }

            if (counter > buffer) {
                buffer = counter;
                item = arr[i];
            }
        }
        counter = 0;
    }
    return item + " " + buffer;
}
console.log(mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 'a', 'a', 2, 4, 9, 3]));
// mostFrequentItem([1,2,3,2]);


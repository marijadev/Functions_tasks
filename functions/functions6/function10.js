"use strict";

// Write a function to find the element that occurs most frequently.

var mostFrequentElement = function (arr) {
    var item;
    var counter = 0;
    var buffer = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
            if ( counter > buffer ) {
                buffer = counter;
                item = arr[i];
            }
        }
        counter = 0;
    }
    return item;
}
console.log(mostFrequentElement(["r", "r", 4, null, 15, "a", "r", 4]));

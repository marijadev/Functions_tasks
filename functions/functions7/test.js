"use strict"

var input = ["M", "Anne", 0, "Steve", "Joe", "John", "David", "Mark", false, "A"];

function filteringArray(input, conditionCallback) {
    var outputArr = [];
    var counter = 0;

    for (var i = 0; i < input.length; i++) {
        if (conditionCallback(input[i])) {
            outputArr[counter] = input[i];
            counter++;
        }
    }
    return outputArr;
}

console.log(filteringArray(input, ifIsNumber))
console.log(filteringArray(input, function (element) {
    return !element
}))




function ifIsString(element) {
    return typeof element === "string"
}

function ifIsNumber(element) {
    return typeof element === "number"
}
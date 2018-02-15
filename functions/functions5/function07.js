"use strict"
// Define a 10 element array.Take the first two letters from every string(that has at least 2 letters)
//  in the array and create a new string from them.Print it out in the console.
// Input: ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]

// Output: AnStJoJoDaMa
function twoLetters() {
    var arr = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];
    var outputStr = "";

    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string" && arr[i].length > 2) {
            // var element = arr[i];
            for (var j = 0; j < 2; j++) {
                // outputStr += element[j];
                outputStr += arr[i][j];
            }
        }
    }
    return outputStr;

}

console.log(twoLetters());
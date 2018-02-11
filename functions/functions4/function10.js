// Write a program that inserts a given element e on the given position p in the array a. 
// If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

function insertAnElement(arr, p, e) {
    var output = [];
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if(i === p) {
            output[counter] = e;
            counter++;
        } 
            output[counter] = arr[i]; 
            counter++;
    }
    return output;
}
console.log(insertAnElement([2, -2, 33, 12, 5, 8], 3, 78));

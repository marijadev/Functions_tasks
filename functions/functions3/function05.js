// Write a function to get the last element of an array. 
// Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  

function lastElementOfArray(arr, num) {
    var result = [],
        counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if (i >= arr.length - num) {
            result[counter] = arr[i];
            counter++;
        }
    }    

    return result;
}
console.log(lastElementOfArray([7, 9, 0, -2], 2));


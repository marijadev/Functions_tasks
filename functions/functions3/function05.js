// Write a function to get the last element of an array. 
// Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  

function lastElementOfArray(arr, num) {
    var result = [];

    for (var i = arr.length; i >= 0; i--) {
        do {
            result = arr[i];
        } while (parseInt(arr[i]) <= num) {

        }
    }
    return result;
}

console.log(lastElementOfArray([7, 9, 0, -2], 2));


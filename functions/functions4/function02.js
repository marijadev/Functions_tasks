// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function multiplyPositiveElements(arr) {
    var outputArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            outputArr[i] = arr[i] * 2;
        } else {
            outputArr[i] = arr[i];
        }        
    }
    return outputArr;
}

console.log(multiplyPositiveElements([-3, 11, 5, 3.4, -8]));

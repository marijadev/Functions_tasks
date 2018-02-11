// Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function intertwineArrays(arr1, arr2) {
    var outputArr = [];
    var counter = 0;

    for (var i = 0; i < arr1.length; i++) {
        outputArr[counter] = arr1[i];
        counter++;
        outputArr[counter] = arr2[i];
        counter++;
    }
    return outputArr;
}
console.log(intertwineArrays([4, 5, 6, 2], [3, 8, 11, 9]));

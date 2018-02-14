// Sort a previously defined array. Place its sorted values into a new array 
// whose values are equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

function sortArray(arr) {
    var output = [];
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        output[counter] = arr[i] * 2;
        counter++;
    }
    output = output.sort(function(a, b){return a - b});
    return output;
}

console.log(sortArray([ 13, 11, 15, 5, 6, 1, 8, 12 ]));

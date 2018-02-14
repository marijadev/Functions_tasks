// Sort a previously defined array in a descending order and display it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

function descendingArray(arr) {
    var output = [];
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        output[counter] = arr[i];
        counter++;        
    }
    output = output.sort(function(a, b){return b - a});
    return output;
}

console.log(descendingArray([ 13, 11, 15, 5, 6, 1, 8, 12 ]));

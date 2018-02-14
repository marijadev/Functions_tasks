// Find the min and max element in the following array and switch their places. 
// Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

var switchPlaces = function(arr) {
    var minItem = arr[0];
    var maxItem = arr[0];
    var maxIndex, minIndex;

    for (var i = 0; i < arr.length; i++) {
        if ( arr[i] > maxItem ) {
            maxItem = arr[i];
            maxIndex = i;
        }        
        if ( arr[i] < minItem ) {
            minItem = arr[i];
            minIndex = i;
        }
    }

    arr[maxIndex] = minItem;
    arr[minIndex] = maxItem;
    
    return arr;
}
console.log(switchPlaces([ 3, 500, 12, 149, 53, 414, 1, 19 ]));


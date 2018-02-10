// Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function filterOutFalsyValues(arr) {
    var newArr = [];
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if(typeof arr[i] !== "undefined" && arr[i] !== null && arr[i] !== 0 && arr[i] !== false && arr[i] !== '' && !isNaN(arr[i]) && !isNaN(arr[i]) ) {
            newArr[counter] = arr[i];
            counter++;
        }   
    }
    return newArr;
}

console.log(filterOutFalsyValues([NaN, 0, 15, false, -22, '', undefined, 47, null]));

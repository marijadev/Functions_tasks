// 11.  Write a function that converts an array of strings into an array of numbers.
// Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

function stringArrayToNumberArray(strArray) {
    var numArray = [];
    var counter = 0;

    for (var i = 0; i < strArray.length; i++) {
        var item = strArray[i];
        if( typeof item !== 'undefined' && item !== Infinity) {
            numArray[counter] = parseFloat(item);    
            counter ++; 
        } 
    }
    return numArray;
}

console.log(stringArrayToNumberArray(["1", "21", undefined, "42", "1e+3", Infinity]));
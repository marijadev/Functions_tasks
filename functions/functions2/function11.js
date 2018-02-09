// 11.  Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

function arrStrToArrNum(arr) {
    var arr2 = [];
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            arr2[counter] = parseFloat(arr[i]);
            counter += 1;
        }
    }
        return arr2;
}

console.log(arrStrToArrNum(["1", "21", undefined, "42", "1e+3", Infinity]));
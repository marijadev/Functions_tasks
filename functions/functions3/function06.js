// Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 

function specNumOfElements(num, arr) {
    var arrFinal = [];

    for (var i = 0; i < num; i++) {
        arrFinal[i] = arr;        
    }
    
    return arrFinal;

}

console.log(specNumOfElements(2, "none"));

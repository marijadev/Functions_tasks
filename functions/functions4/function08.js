// Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]


function concatenateArrays(first, second) {
    var finalArray = [];
    var counter = 0;

    for(var i = 0; i < first.length; i++) {
        finalArray[counter] = first[i];
        counter++;
    }

    for (var i = 0; i < second.length; i++) {
        finalArray[counter] = second[i];
        counter++;        
    }

    return finalArray;
}

console.log(concatenateArrays([4, 5, 6, 2], [3, 8, 11, 9]));
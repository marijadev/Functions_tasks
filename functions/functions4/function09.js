// Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

function deleteElement(arr, e) {
    var output = [];
    var counter = 0;
    
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] !== e) {
            output[counter] = arr[i];  
            counter++;
        }
    }
    return output;
}
console.log(deleteElement([4, 6, 2, 8, 2, 2], 2));

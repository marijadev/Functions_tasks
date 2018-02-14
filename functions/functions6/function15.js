// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

var textFrame = function(arr) {
    var asterisk = "*";
    var blank = " ";
    var strWords = "";
    var singleWord = arr[0];
    var item = "";

    for (var i = 0; i < arr.length; i++) {
        if( arr[i].length > singleWord.length ) {
            item = arr[i];
            
        }
    }
    return item;
}

console.log(textFrame(["Hello", "World", "in", "a", "frame"]));


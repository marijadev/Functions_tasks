// Write a function that draws a square of a given size. For example,  if the size of square is 5 the function should draw: 
// *****
// *    *
// *    *
// *    *
// *****

function squareDraw() {
    var asterisk = "*";
    var blank = " ";
    var result = "";

    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            result = asterisk[j];
        }
    }
    return result;
}
console.log(squareDraw());
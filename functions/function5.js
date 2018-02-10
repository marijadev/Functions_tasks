// Write a function that draws a square of a given size. For example,  if the size of square is 5 the function should draw: 
// *****
// *    *
// *    *
// *    *
// *****

function squareDraw(size) {
    var asterisk = "*";
    var blank = " ";
    var result = "";
    var newLine = "\n";

    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if(i === 0 || i === size - 1) {
                result += asterisk;
            } else if (j > 0 && j < size -1) {
                result += blank;
                result += newLine;
            }
        }

    }
    return result;
}
console.log(squareDraw(5));
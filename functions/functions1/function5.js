// Write a function that draws a square of a given size. For example,  if the size of square is 5 the function should draw: 
// *****
// *    *
// *    *
// *    *
// *****

function squareDraw(input) {
    var asterisk = "*";
    var blank = " ";
    var row = "\n";
    var result = "";

    for (var i = 0; i < input; i++) {
        if (i == 0 || i == input - 1) {
            for (var j = 0; j < input; j++) {
                result += asterisk;
            }
        } else {
            for (var j = 0; j < input; j++) {
                if (j == 0 || j == input - 1) {
                    result += asterisk;
                } else {
                    result += blank;
                }
            }
        }
        result += row;
    }

    console.log(result);
    return result;
}

squareDraw(15);
// Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function concatenateString (input,num) {
    
    if(typeof num !== "number" || num <= 0) {
        return input;
    }

    var buffer = "";
    for(var i = 0; i < num; i++) {
        buffer += input;
    }

    return buffer;
}

console.log(concatenateString("Ha"));
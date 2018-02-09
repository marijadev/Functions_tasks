// 9.  Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string"

function separator(str, sep) {
    var blank = " ";
    var arr = [];
    var def = "-";
    var strFinal = "";

    sep = sep || def

    for (var i = 0; i < str.length; i++) {
        if(str[i] !== blank) {
            arr[i] = str[i];
        } else if(str[i] === blank) {
            arr[i] = sep;
        } 
        strFinal += arr[i];
    }
    return strFinal;
    
}

console.log(separator("My random string"));


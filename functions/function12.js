// Write a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false

function stringCheck(input){

    if (typeof input === "string") {
        console.log("It's a string!");
    } else {
        console.log( "Sorry,it'a not a string!");
    }
    return stringCheck;
}

console.log(stringCheck(1565));


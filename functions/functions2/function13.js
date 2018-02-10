// 13. Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
//      1 -> 1st
//      11 -> 11th

//      Hint: num % 100 >= 11 && num % 100 <= 13

function humanizeNumber(num) {
    var final = "";
    var str = num.toString();

    for(var i = str.length; i >= 0; i--) {
        if(parseFloat(str[i]) === 1) {
            final = num + "st";
            break;
        } else if(parseFloat(str[i]) === 2) {
            final = num + "nd";
            break;
        } else if(parseFloat(str[i]) === 3) {
            final = num + "rd";
            break;
        } else {
            final = num + "th";
        }
    }
    return final;
}
console.log(humanizeNumber(141));


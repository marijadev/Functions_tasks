"use strict";
// Write a function to hide email addresses to protect them from unauthorized users.

//     "somerandomaddress@example.com" -> "somerand...@example.com"

function hideEmail(str) {
    var beforeMonkey = str.substring(0, 5);
    var hidePart = "...";
    var afterMonkey = str.substring(9,str.length - 1);

    return beforeMonkey + hidePart + afterMonkey;
}

console.log(hideEmail("somerandomaddress@example.com"));

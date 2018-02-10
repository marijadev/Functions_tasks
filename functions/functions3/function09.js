// Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "myemail...@bgit.rs"

function hideEmailAddress(input, n) {
    var monkeyIndex;

    //check if email
    for (var i = 0; i < input.length; i++) {
        if (input[i] == '@') {
            monkeyIndex = i;
            break;
        }
    }

    var temp = '';

    for (var i=0; i < input.length; i++ ) {
        if (i < monkeyIndex - n || i > monkeyIndex) {
            temp += input[i];
        } else if (i == monkeyIndex) {
            temp += '...@';
        }
    }

    console.log(temp)
}

hideEmailAddress("myemailaddress@bgit.rs", 7);

// 10. Write a function to get the first n characters and add “...” at the end of newly created string.

function wordShortening(word, num) {
    var result = "";
    var dots = "...";
    
    for(var i = 0; i < num; i++) {
        result += word[i];
    }
    result += dots;
    return result;
}

console.log(wordShortening("Laboratory", 7));

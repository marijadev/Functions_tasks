"use strict";

var body = $("body");
var gallery = $("<div>");
var title = $("<h1>Main title</h1>");
var generateNum = 0;

var links = [
    'https://via.placeholder.com/350x300/3gthg8',
    'https://via.placeholder.com/350x300/nj87d9>',
    'https://via.placeholder.com/350x300/b6hsif>',
    'https://via.placeholder.com/350x300/>'
]

links.forEach(function (source, index) {
    generateNum = Math.round(Math.random() * 1000);
    var currentImg = $("<img>").attr("src", source);
    currentImg.css("width", generateNum);

    if(currentImg.width() < "200") {
        currentImg.addClass("borderImg");
    }
    //If you want like in task!!!
    // else {
    //     return;
    // }

    gallery.append(currentImg);
})

gallery.prepend(title);
body.prepend(gallery);
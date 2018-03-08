"use strict"

function getDataFromServer(url) {

    var newRequest = new XMLHttpRequest();

    newRequest.open("GET", url);

    newRequest.addEventListener("load", function (response) {
        if (newRequest.status >= 200 && newRequest.status < 400) {
            var data = JSON.parse(newRequest.responseText);
            // console.log(newRequest.responseText);

            var stringData = JSON.stringify(data);
            // console.log(data.country_name);
            // console.log(stringData);

        }
    })

    newRequest.send();
    return newRequest;
}

var result = getDataFromServer("https://www.freegeoip.net/json/82.117.204.106");
console.log(result);

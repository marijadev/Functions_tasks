"use strict"


// var newReq = new XMLHttpRequest();

// newReq.open("GET", "https://www.freegeoip.net/xml/82.117.204.106");

// newReq.send();

// newReq.onload = function (response) {
//     var docXML = newReq.responseXML;

//     var country = docXML.querySelector("CountryName");
//     console.log(country);

//     document.querySelector("body").innerHTML = country.textContent;

// }


function checkCountrybasedOnIP(param) {

    var a = new XMLHttpRequest();
    a.open("GET", param);
    a.send();
    a.addEventListener("load", function (response) {
        var documentXML = a.responseXML;
        var country = documentXML.querySelector("CountryName");
        var countryName=country.textContent;
        document.querySelector("body").innerHTML = country.textContent;
        return countryName
    });
    return a;
}

var result = checkCountrybasedOnIP("https://www.freegeoip.net/xml/82.117.204.106");
console.log(result);


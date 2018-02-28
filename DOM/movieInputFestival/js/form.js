"use strict";


var submit = document.querySelector("#submit");
var movieList = [];

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.genre + ", " + this.length + "min";
}

submit.addEventListener("click", function (event) {
    createMovie();
})

function createMovie() {
    var title = document.querySelector("#movie-title").value;
    var length = document.querySelector("#movie-length").value;
    var genre = document.getElementById("genre-select").value;

    var movie = new Movie(title, genre, length);

    movieList.push(movie);

    appendMoviesToDiv(movieList);
}

function appendMoviesToDiv(ml) {
    
    var movieListContainer = document.querySelector(".m-list");// Dodelimo lokaciju nekoj varijabli. Lokacija je mesto gde hocemo da se nove stvari ispisuju
    var movie = ml[ml.length - 1]; // Sta hocemo da ispisujemo. U ovom slucaju poslednji element u nasem nizu
    var movieToAppend = document.createElement("p"); // Pravimo novi element u divu, tj paragraf koji cemo da smestimo u ovaj div koji smo definisali u prvom koraku
    movieToAppend.textContent = movie.getData(); // ubacujemo nas film u textContent paragrafa koji smo malopre napravili
    movieListContainer.appendChild(movieToAppend); // ubacujemo sve u div
}
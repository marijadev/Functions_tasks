"use strict";

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.genre + ", " + this.length + "min.";
}

function Genre(genre) {
    this.name = name;
}

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.totalNumMovies = 0;
}

// movie
var movieTitleInput = document.querySelector("#movie-title");
var movieLengthInput = document.querySelector("#movie-length");
var movieGenreSelect = document.querySelector("#movie-genre");
var movieSubmitBtn = document.querySelector("#submit-movie");
// program
var programDate = document.querySelector("#program-date");
var programSubmitBtn = document.querySelector("#submit-program");
var programMovieSelect = document.querySelector("#movie-list");
var programListSelect = document.querySelector("#program-list");
var movieToProgramSubmitBtn = document.querySelector("#submit-movie-to-program");


function createMovie(title, genre, length) {
    var movie = new Movie(title, genre, length);
    return movie;
}

movieSubmitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var title = movieTitleInput.value !== "" ? movieTitleInput.value : "";
    var length = parseInt(movieLengthInput.value) !== "" ? movieLengthInput.value : "";  
    var genre = movieGenreSelect.value !== "" ? movieGenreSelect.value : "";  
      
    if(title && length && genre) {
        var currentMovie = createMovie(title, genre, length);
        var currentMovieData = currentMovie.getData();
        appendMovieToList(currentMovie);
    } else {
        console.log(title)
        console.log(length);
        console.log(genre);
    }
});

function appendMovieToList(movie) {
    var option = document.createElement("option");
    option.text = movie.title;
    option.value = movie.title;
    programMovieSelect.appendChild(option);
    console.log(movie)
}
"use strict";



// // global
// var movieIndex = 0;
// var movieList = [];
// var programIndex = 0;
// var programList = [];

// // DOM elements
// var movieDiv = document.querySelector(".display-movie");
// var movieUl = document.createElement("ul");
// movieDiv.appendChild(movieUl);

// var programDiv = document.querySelector(".display-program");
// var programUl = document.createElement("ul");
// programDiv.appendChild(programUl);

// // movie
// var movieTitleInput = document.querySelector("#movie-title");
// var movieLengthInput = document.querySelector("#movie-length");
// var movieGenreSelect = document.querySelector("#movie-genre");
// var movieSubmitBtn = document.querySelector("#submit-movie");

// // program
// var programDate = document.querySelector("#program-date");
// var programSubmitBtn = document.querySelector("#submit-program");
// var movieToProgramSubmitBtn = document.querySelector("#submit-movie-to-program");

// // dropdown menu for movie and program
// var movieSelect = document.querySelector("#movie-list");
// var programSelect = document.querySelector("#program-list");

var dataModule = (function () {

    var movieData = (function(){
        var data = { //object containing list of movies
            movieList: [] //list of all movie objects
        }
    })();

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

   function addMovie(movieData){
       var movie = new Movie(movieData.title, movieData.genre, movieData.length); //creating new movie object
       data.movieList.push(movie); //push movie into list of movies
   }

})();

var uiModule = (function () {
    var movieTitleInput = document.querySelector("#movie-title");
    var movieLengthInput = document.querySelector("#movie-length");
    var movieGenreSelect = document.querySelector("#movie-genre");

    var titleVal = movieTitleInput.value;
    var lengthVal = movieLengthInput.value;
    var genreVal = movieGenreInput.value;

    var getDataObj = {
        title: titleVal,
        length: lengthVal,
        genre: genreVal,
    }

})();

var ctrlModule = (function () {
    // var movieSubmitBtn = document.querySelector("#submit-movie");


})();
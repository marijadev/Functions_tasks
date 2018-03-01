"use strict";

function Movie(title, length, genre, index) {
    this.title = title;
    this.genre = genre;
    this.length = parseInt(length);
    this.index = index;
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.genre + ", " + this.length + "min.";
}

function Program(date, index) {
    this.date = new Date(date);
    this.moviesInProgram = [];
    this.index = index;
    this.totalTime = 0;
}

Program.prototype.getData = function () {

    return this.date.getDate() + "." + this.date.getMonth() + "." + this.date.getFullYear() + ", program duration " + this.totalTime + "min\n";
}


// global
var movieIndex = 0;
var movieList = [];
var programIndex = 0;
var programList = [];

// DOM elements
var movieDiv = document.querySelector(".display-movie");
var movieUl = document.createElement("ul");
movieDiv.appendChild(movieUl);

var programDiv = document.querySelector(".display-program");
var programUl = document.createElement("ul");
programDiv.appendChild(programUl);

// movie
var movieTitleInput = document.querySelector("#movie-title");
var movieLengthInput = document.querySelector("#movie-length");
var movieGenreSelect = document.querySelector("#movie-genre");
var movieSubmitBtn = document.querySelector("#submit-movie");

// program
var programDate = document.querySelector("#program-date");
var programSubmitBtn = document.querySelector("#submit-program");
var movieToProgramSubmitBtn = document.querySelector("#submit-movie-to-program");

// dropdown menu for movie and program
var movieSelect = document.querySelector("#movie-list");
var programSelect = document.querySelector("#program-list");

function createMovie(title, length, genre, index) {
    return new Movie(title, length, genre, index);
}

function createProgram(date, index) {
    return new Program(date, index);
}
// append movie/program to list/option
function appendItem(item, htmlElement, parent) {
    var element = document.createElement(htmlElement);
    element.textContent = item.getData();

    //set value of option field
    if (htmlElement == "option") {
        element.value = item.index;
    }

    parent.appendChild(element);
}

movieSubmitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var title = movieTitleInput.value || "";
    var length = movieLengthInput.value || "";
    var genre = movieGenreSelect.value || "";
    
    if(title && length && genre) {
        var currentMovie = createMovie(title, length, genre, movieIndex);
        appendItem(currentMovie, "li", movieUl); //add to list
        appendItem(currentMovie, "option", movieSelect); //add to select box
        movieList.push(currentMovie); //add to global list
        movieIndex ++; //increment index for unique id
    }
})

programSubmitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var date = programDate.value || "";

    if (date) {
        var currentProgram = createProgram(date, programIndex);
        appendItem(currentProgram, "li", programDiv);
        appendItem(currentProgram, "option", programSelect);
        programList.push(currentProgram);
        programIndex ++; //increment index for unique id
    }
})

movieToProgramSubmitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var movieIndex = movieSelect.value || "";
    var programIndex = programSelect.value || "";

    if (movieIndex && programIndex) {
        var currentProgram = programList[programIndex];
        var currentMovie = movieList[movieIndex];
        currentProgram.moviesInProgram.push(currentMovie);
        currentProgram.totalTime += currentMovie.length;
        console.log(currentProgram);
    }
}) 


//to do
//create genre as object
//program duration - moviesInProgram duration sum
//update program display info
//prevent double creation
//add programs to festival

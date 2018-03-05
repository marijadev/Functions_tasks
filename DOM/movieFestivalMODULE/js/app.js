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
    var data = { //object containing list of movies
        indexM: 0,
        movieList: [] //list of all movies
    }

    function Movie(title, length, genre, indexM) {
        this.title = title;
        this.length = length;
        this.genre = genre;
        this.indexM = indexM;
    }
    
    Movie.prototype.getData = function () {
        return this.title + ", " + this.length + "min, " + this.genre;
    };
    
    function addMovie(formData) {
        var movie = new Movie(formData.title, formData.length, formData.genre, data.indexM); //creating new movie object
        data.movieList.push(movie); //push movie into list of movies
        data.indexM++;
        return movie;
    }

    return {
        createMovie: addMovie,
        getMovieData: Movie.getData
    }
})();

var uiModule = (function () {
    var DOMSelectors = {
        movieTitleElement: "#movie-title",
        movieLengthElement: "#movie-length",
        movieGenreSelect: "#movie-genre",
        movieSubmit: "#submit-movie",
        displayMovie: ".display-movie",
        movieSelectDrop: "#movie-list"
    }

    function getFormData() {
        var movieTitleInput = document.querySelector(DOMSelectors.movieTitleElement);
        var movieLengthInput = document.querySelector(DOMSelectors.movieLengthElement);
        var movieGenreInput = document.querySelector(DOMSelectors.movieGenreSelect);

        var titleVal = movieTitleInput.value;
        var lengthVal = movieLengthInput.value;
        var genreVal = movieGenreInput.value;

        //collect input values
        var getDataObj = {
            title: titleVal,
            length: lengthVal,
            genre: genreVal
        }

        return getDataObj; //return input object
    }

    function appendItem(item, htmlElement, parent, index) {
        var element = document.createElement(htmlElement);
        element.textContent = item.getData();
        //set value of option field
        if (htmlElement == "option") {
            element.value = index;
        }
        parent.appendChild(element);
    }

    return {
        DOMInputs: DOMSelectors,
        formData: getFormData,
        appendData: appendItem
    };
})();

var ctrlModule = (function (dataModule, uiModule) {
    document.querySelector(uiModule.DOMInputs.movieSubmit).addEventListener("click", function (event) {
        event.preventDefault();
        var movieObj = dataModule.createMovie(uiModule.formData());
        uiModule.appendData(movieObj, 'li', document.querySelector(uiModule.DOMInputs.displayMovie), movieObj.indexM);
        uiModule.appendData(movieObj, 'option', document.querySelector(uiModule.DOMInputs.movieSelectDrop), movieObj.indexM);
        
    });
})(dataModule, uiModule);
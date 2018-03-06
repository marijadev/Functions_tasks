"use strict";

var dataModule = (function () {
    var data = {
        movieList: [],
        programList: []
    }

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    Movie.prototype.getData = function () {
        return this.title + ", " + this.length + "min, " + this.genre;
    };

    function addMovie(formData) {
        var movie = new Movie(formData.title, formData.length, formData.genre);
        Object.defineProperty(movie, 'index', { // object, "property"
            value: data.movieList.length,
            writable: false
        });
        data.movieList.push(movie);
        return movie;
    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfMoviesInProgram = [];
    }

    Program.prototype.getData = function () {
        return this.date.getDate() + "." + this.date.getMonth() + "." + this.date.getFullYear() + ".";
    }

    function addProgram(formData) {
        var program = new Program(formData.date);
        Object.defineProperty(program, 'index', { // object, "property"
            value: data.programList.length,
            writable: false
        });
        data.programList.push(program);
        return program;
    }

    function addMovieToProgram(movieIndex, programIndex) {
        var currentProgram = data.programList[programIndex];
        var currentMovie = data.movieList[movieIndex];
        currentProgram.listOfMoviesInProgram.push(currentMovie);
        console.log(currentProgram)
    }

    return {
        createMovie: addMovie,
        getMovieData: Movie.getData,
        createProgram: addProgram,
        getProgramData: Program.getData,
        programMovieData: data,
        addMovieToProgramInit: addMovieToProgram
    }
})();

var uiModule = (function () {
    var DOMSelectors = {
        movieTitleElement: "#movie-title",
        movieLengthElement: "#movie-length",
        movieGenreSelect: "#movie-genre",
        movieSubmit: "#submit-movie",
        displayMovie: ".display-movie",
        movieSelectDrop: "#movie-list",
        showMovieLength: ".display-movie-length",
        submitProgram: "#submit-program",
        programDate: "#program-date",
        programSelectDrop: "#program-list",
        displayProgram: ".display-program",
        submitMovieToProgram: "#submit-movie-to-program"
    }

    function getFormData() {
        var movieTitleInput = document.querySelector(DOMSelectors.movieTitleElement);
        var movieLengthInput = document.querySelector(DOMSelectors.movieLengthElement);
        var movieGenreInput = document.querySelector(DOMSelectors.movieGenreSelect);
        var programDateInput = document.querySelector(DOMSelectors.programDate);
        var movieSelectDropInput = document.querySelector(DOMSelectors.movieSelectDrop);
        var programSelectDropInput = document.querySelector(DOMSelectors.programSelectDrop);

        var titleVal = movieTitleInput.value;
        var lengthVal = movieLengthInput.value;
        var genreVal = movieGenreInput.value;
        var programDateVal = programDateInput.value;
        var movieSelectDropVal = movieSelectDropInput.value;
        var programSelectDropVal = programSelectDropInput.value;

        //collect input values
        var movieDataObj = {
            title: titleVal,
            length: lengthVal,
            genre: genreVal
        }

        var programDataObj = {
            date: programDateVal
        }

        var movieToProgramObj = {
            movieIndex: movieSelectDropVal,
            programIndex: programSelectDropVal
        }

        return {
            getMovieDataObj: movieDataObj,
            getProgramDataObj: programDataObj,
            getMovieToProgramObj: movieToProgramObj
        };
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
        var movieObj = dataModule.createMovie(uiModule.formData().getMovieDataObj);
        uiModule.appendData(movieObj, 'li', document.querySelector(uiModule.DOMInputs.displayMovie), movieObj.index);
        uiModule.appendData(movieObj, 'option', document.querySelector(uiModule.DOMInputs.movieSelectDrop), movieObj.index);
    });

    document.querySelector(uiModule.DOMInputs.submitProgram).addEventListener("click", function (event) {
        event.preventDefault();
        var programObj = dataModule.createProgram(uiModule.formData().getProgramDataObj);
        uiModule.appendData(programObj, 'li', document.querySelector(uiModule.DOMInputs.displayProgram), programObj.index);
        uiModule.appendData(programObj, 'option', document.querySelector(uiModule.DOMInputs.programSelectDrop), programObj.index);
    })

    document.querySelector(uiModule.DOMInputs.submitMovieToProgram).addEventListener("click", function (event) {
        event.preventDefault();

        var movieIndex = uiModule.formData().getMovieToProgramObj.movieIndex;
        var programIndex = uiModule.formData().getMovieToProgramObj.programIndex;

        dataModule.addMovieToProgramInit(movieIndex, programIndex);
    })
})(dataModule, uiModule);
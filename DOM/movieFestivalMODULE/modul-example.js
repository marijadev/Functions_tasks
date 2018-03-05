"use strict"

//scope1 - data
var dataModule = (function () {
    var data = {
        movieList = []
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }
    
    // data.movieList.push();
    function addMovie(movieData) {
        var movie = newMovie(movieData.title, movieData, movieData.length)
        data.movieList.push(movie);
    }

    // function test() {
    //     console.log(data)
    // }

    return {
        addMovieToList: addMovie
    }
})();

//scope2 - UI
var uiModule = (function () {

    // var DOMSelectors = {
    //     movieTitleElement:"#movie-title",
    //     movieLengthElement:"#movie-length",
    //     movieGenreElement:"#movie-genre",
        
    // }

    function getFormData() {
        var movieTitleInput = document.querySelector("#movie-title");
        // var movieTitleInput = document.querySelector(DOMSelectors.movieTitleElement);
        var movieLengthInput = document.querySelector("#movie-length");
        var movieGenreSelect = document.querySelector("#movie-genre");
        var movieSubmitBtn = document.querySelector("#submit-movie");

        var title = movieTitleInput.value;
        var length = movieLengthInput.value;
        var genre = movieGenreSelect.value;

        var formInputObj = {
            title: title,
            length:length,
            genre: genre
        }

        return formDataObj;
    }
//need to return to global scope
    return {
        collectFormInput: getFormData
        // DOMSelectors
    }

})();


//scope3 - controller
var ctrlModule = (function (dataCtrl, uiCtrl) {

    document.querySelector("#submit-movie").addEventListener("click", function (event) {
        //get form data() from UI module;
        var formMovie = uiCtrl.collectFormInput();
        //add movie to list
        dataCtrl.addMovieToList(formMovie);
        //show movie data
        // uiCtrl.showMovieData()

        //add collected movie to list of movies
    })

})(dataModule, uiModule);
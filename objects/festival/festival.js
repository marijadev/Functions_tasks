"use strict";

(
    function () {


        function Genre(name) {
            this.name = name;

            this.getData = function () {
                var firstLetter = name.charAt(0);
                var lastLetter = name.charAt(name.length - 1);
                var result = firstLetter + lastLetter;
                return result.toUpperCase();
            }

        }

        function Movie(title, genre, length) {
            this.title = title;
            this.genre = genre;
            this.length = length;

            this.getData = function () {
                return this.title + ", " + this.genre.getData() + ", " + this.length;
            }

        }

        function Program(date, movieList, numOfMovies) {
            this.date = new Date(date);
            this.movieList = [];
            this.numOfMovies = numOfMovies;

            this.getData = function () {
                return this.title + ", " + this.length + ", " + this.genre.getData();
            }

        }

        function Festival(name, listOfPrograms, moviesAll) {
            this.name = name;
            this.listOfPrograms = [];
            this.moviesAll = moviesAll;

            this.getData = function () {
                var output="";
                for(var i=0;i<this.movieList.lengt)

                return this.date + ", " + this.length + ", " + this.genre.getData();
            }
        }
        var action = new Genre("Action");

        var a = new Movie("Spiderman", action, 123);
        console.log(a.getData());






        console.log("Hi");
    }
)();
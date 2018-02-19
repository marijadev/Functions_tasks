"use strict";

(
    function () {

        function Genre(name) {
            this.name = name;

            this.getData = function () {
                return (name.charAt(0) + name.charAt(name.length - 1)).toUpperCase();
            }
        }

        function Movie(title, genre, length) {
            this.title = title;
            // this.genre = new Genre(genre);
            this.genre = genre;
            this.length = length;

            this.getData = function () {
                return this.title + ", " + this.length + "min, " + this.genre.getData();
            }
        }

        function Program(date) {
            this.date = date;
            this.listOfMovies = [];
            this.numberOfMovies = "";

            this.addMovie = function (movie) {
                this.listOfMovies.push(movie);
            }

            this.getData = function () {
                var date = this.date;
                var programLength = 0;
                for (var i = 0; i < this.listOfMovies.length; i++) {
                    programLength += this.listOfMovies[i].length;
                }
                var moviesData = "";
                for (var i = 0; i < this.listOfMovies.length; i++) {
                    moviesData += "\t" + this.listOfMovies[i].getData() + "\n";                    
                }
                return date + ", " + programLength + "min, " + moviesData;
            }
        }

        function Festival(name, listOfPrograms, numberOfMoviesInAllPrograms) {
            this.name = name;
            this.listOfPrograms = [];
            this.numberOfMoviesInAllPrograms = numberOfMoviesInAllPrograms;

            this.addProgram = function (program) {
                this.listOfPrograms.push(program);
            }

            this.getData = function() {
                var allPrograms = "";
                for (var i = 0; i < this.listOfPrograms.length; i++) {
                    allPrograms += this.listOfPrograms[i];                   
                }
                return this.name + " has " + this.numberOfMoviesInAllPrograms + " movie titles\n" + allPrograms; 
            }
        }

        //create genre
        var action = new Genre("Action"),
            drama = new Genre ("Drama");
        
        //create movies
        var m1 = new Movie('Spider-man', action, 120);
        var m2 = new Movie('Batman', drama, 120);

        //create program
        var program1 = new Program ("2006")
        program1.addMovie(m1);

        console.log(program1.listOfMovies)
    }
)();
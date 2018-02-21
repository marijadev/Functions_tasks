"use strict";

(
    function () {
        function Genre(name) {
            this.name = name;

            this.getData = function () {
                return (this.name.charAt(0) + this.name.charAt(this.name.length - 1)).toUpperCase();
            }
        }

        function Movie(title, genre, length) {
            this.title = title;
            this.genre = genre;
            this.length = length;

            this.getData = function () {
                return this.title + ", " + this.length + "min, " + this.genre.name;
            }
        }

        function Program(date) {
            this.date = new Date(date); //converting input format to valid date format
            this.listOfMovies = [];
            this.totalNumberOfMovies = 0;

            this.addMovie = function (movie) {
                this.listOfMovies.push(movie);
                this.totalNumberOfMovies++;
            }

            this.totalLength = function () {
                var result = 0;
                for (var i = 0; i < this.listOfMovies.length; i++) {
                    result += this.listOfMovies[i].length;
                }
                return result;
            }

            this.getData = function () {
                var moviesData = "";
                
                for (var i = 0; i < this.listOfMovies.length; i++) {
                    moviesData += "\t" + this.listOfMovies[i].getData() + "\n";                    
                }
                return this.date + ", " + this.totalLength() + ", " + moviesData;
            }

        }

        function Festival(name) {
            this.name = name;
            this.listOfPrograms = [];
            this.numberOfMoviesInAllPrograms = 0;

            this.addProgram = function (program) {
                this.listOfPrograms.push(program);
            }
        }

        var action = new Genre("action");
        var drama = new Genre("drama");
        var thriller = new Genre("thriller");

        var movie1 = new Movie("Spiderman", action, 130);
        var movie2 = new Movie("Split", thriller, 240);
        var movie3 = new Movie("Twelve Years A Slave", drama, 90);

        var program1 = new Program("2017-08-12");

        program1.addMovie(movie1);
        program1.addMovie(movie2);
        program1.addMovie(movie3);

        var festival = new Festival("FEST");

        festival.addProgram(program1);

        console.log(program1.getData());
    }
)();
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
                return this.date + ", " + this.totalLength() + "min\n" + moviesData;
            }
        }

        function Festival(name) {
            this.name = name;
            this.listOfPrograms = [];
            this.numberOfMoviesInAllPrograms = 0;
            this.addProgram = function (program) {
                this.listOfPrograms.push(program);
                this.numberOfMoviesInAllPrograms += program.totalNumberOfMovies;
            }
            this.getData = function() {
                var festivalInfo =  this.name + " has " + this.numberOfMoviesInAllPrograms + " movie titles\n";
                var allPrograms = ""; 
                //  festivalInfo + program1.getData() + "\n";
                for(var i = 0; i < this.listOfPrograms.length; i++){
                    allPrograms += this.listOfPrograms[i].getData();
                }
                return festivalInfo + allPrograms + "\n";
            }
        }

        function createMovie(title, length, genre) {
            return new Movie(title, length, genre);
        }

        function createProgram(date) {
            return new Program(date);
        }

        var festival1 = new Festival("FEST");

        var action = new Genre("action");
        var drama = new Genre("drama");
        var thriller = new Genre("thriller");

        var program1 = createProgram("2018-12-07");
        var program2 = createProgram("2017-12-03");

        var movie1 = createMovie("Spiderman", action, 130);
        var movie2 = createMovie("Split", thriller, 240);
        var movie3 = createMovie("Twelve Years A Slave", drama, 90);

        // var program1 = new Program("2017-08-12");

        program1.addMovie(movie1);
        program1.addMovie(movie2);
        program1.addMovie(movie3);

        program2.addMovie(movie1);
        program2.addMovie(movie2);
        program2.addMovie(movie3);

        festival1.addProgram(program1);
        festival1.addProgram(program2);
        


        console.log(festival1.getData());
    }
)();
"use strict";

(
    function() {
        
        function Genre(name) {
            this.name = name;

            this.getData = function() {
                return (this.name.charAt(0) + this.name.charAt(name.length-1)).toUpperCase(); 
            }
        }

        function Movie(title, genre, length) {
            this.title = title;
            this.genre = genre;
            this.length = length;

            this.getData = function () {
                return this.title + ", " + this.length + "min, " + genre.getData();
            }
        }

        function Program(date, listOfMovies, totalNumberOfMovies) {
            this.date = date;
            this.listOfMovies = [];
            this.totalNumberOfMovies = totalNumberOfMovies;

            this.addMovie = function(movie) {
                for (var i = 0; i < this.listOfMovies.length; i++) {
                    this.listOfMovies.push();                    
                }
                return listOfMovies;
            }
            console.log(this.addMovie())
        }

        function Festival(name, listOfPrograms, numOfMoviesInAllPrograms) {
            this.name = name;
            this.listOfPrograms = [];
            this.numOfMoviesInAllPrograms = numOfMoviesInAllPrograms;

            this.addProgram = function(program) {
                for (var i = 0; i < this.listOfPrograms.length; i++) {
                    this.listOfPrograms.push();                    
                }
                return listOfPrograms;
            }
        }

        var action = new Genre("action");
        var drama = new Genre("drama");
        var crime = new Genre("crime");

        var movie1 = new Movie("Avengers", action, 139);
        var movie2 = new Movie("Bron", crime, 45);
        console.log(movie1.getData());

    }
)();
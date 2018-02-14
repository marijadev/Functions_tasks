"use strict";
// The body mass index (BMI) is the ratio of the weight of a person (in kilograms) 
// to the square of the height (in meters). 
// Write a function that takes two parameters, weight and height, computes the BMI, 
// and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly obese: greater than or equal to 40

var bmiCount = function(weight, height) {
    var result = weight / (height^2);

    if( result <= 15 ) {
        return "starvation";
    } else if ( result > 15 && result <= 17.5 ) {
        return "anorexic";
    } else if ( result > 17.5 && result <= 18.5 ) {
        return "underweight";
    } else if ( result > 18.5 && result <= 25 ) {
        return "ideal";
    } else if ( result > 25 && result <= 30 ) {
        return "overweight";
    } else if ( result > 30 && result <= 40 ) {
        return "obese";
    } else {
        return "morbidly obese";
    }
}

console.log(bmiCount(55, 1.68));


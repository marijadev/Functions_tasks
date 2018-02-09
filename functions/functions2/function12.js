// 12.  Write a function to calculate how many years there are left until retirement based on the year of birth.
//      Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.

function retirement(yearOfbirth, gender) {
    var currentYear = 2018;
    var age = currentYear - yearOfbirth;
    var ageTillRetMale = 65 - age;
    var ageTillRetFemale = 60 - age;
    var temp = "";

    if (age < 65 && gender === "m") {
        temp = "You have " + ageTillRetMale + " years until retirement."
        return temp;
    } else if (age < 60 && gender === "f") {
        temp = "You have " + ageTillRetFemale + " years until retirement."
        return temp;
    } else if ((age > 65 && gender === "m") || (age > 60 && gender === "f")) {
        temp = "Done and done"
        return temp;
    }
    
}

console.log(retirement(1939, "f"));


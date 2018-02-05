var grade = "f";
var result = "";

switch (grade) {
    case "a":
        result = "Good job";
        console.log(result);
        break;

    case "b":
        result = "Pretty good";
        console.log(result);
        break;

    case "c":
        result = "Passed";
        console.log(result);
        break;

    case "d":
        result = "Not good";
        console.log(result);
        break;

    case "f":
        result = "Failed";
        console.log(result);
        break;
    
    default:
      console.log("Unknown grade")
}

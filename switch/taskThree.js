var day = 5;
var result = "";

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = "It's a weekday";
        console.log(result);
        break;

    case 6:
    case 7:
        result = "It's a weekend.";
        console.log(result);
        break;
    
    default:
      console.log("Input must be a number between 1 and 7")
}

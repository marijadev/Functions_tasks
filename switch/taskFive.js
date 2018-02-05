var month = 12;
var result = "";

switch (month) {
    case 1:
    case 2:
    case 12:
        result = "winter";
        console.log(result);
        break;

    case 3:
    case 4:
    case 5:
        result = "spring";
        console.log(result);
        break;

    case 6:
    case 7:
    case 8:
        result = "summer";
        console.log(result);
        break;

    case 9:
    case 10:
    case 11:
        result = "autumn";
        console.log(result);
        break;

    
    default:
      console.log("Input must be a number between 1 and 12")
}

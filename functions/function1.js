function maxNum(firstNum, secondNum) {
    
    if(firstNum > secondNum) {
        console.log(firstNum + " is bigger than " + secondNum);
    } else {
        console.log(secondNum + " is bigger than " + firstNum);
    }

    return maxNum;
}

console.log(maxNum(3, 4));
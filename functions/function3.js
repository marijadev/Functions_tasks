function threeDigitNum(num) {

    if ((num < 1000 && num > 99) || (num < -99 && num > -1000)) {
        return true
    } else {
        return false
    }
} 
console.log(threeDigitNum(-222));
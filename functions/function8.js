var sum = 0;

function numArr(niz, x) {
    for (i = 0; i < niz.length; i++) {
        if (niz[i] === x) {
            sum += 1;
        }
    }
    return sum;
}

console.log(numArr([5, 7, 8, 9, 5, 5, 5], 5));
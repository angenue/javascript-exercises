const sumAll = function(numOne, numTwo) {
    let sum = 0;
    if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) { return 'ERROR';}
    if(numOne < 0 || numTwo < 0) { return 'ERROR'}
    else if (numOne > numTwo) {
        for (i = numOne; i >= numTwo; i--) {
            sum += i;
        }
        return sum;
    }
    else if (numOne < numTwo) {
    for (i = numOne; i <= numTwo; i++) {
        sum += i;
    }
    return sum;
}

};

// Do not edit below this line
module.exports = sumAll;

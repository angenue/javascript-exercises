const reverseString = function(array) {
    const reverseArray = [];
    
    for (i = array.length-1; i >= 0 ;i--) {
        reverseArray.push(array[i])
    }

    return reverseArray.join('');
};

// Do not edit below this line
module.exports = reverseString;

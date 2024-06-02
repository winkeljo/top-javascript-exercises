const reverseString = function(stringToReverse) {
    let resultString = "";

    for (let i = stringToReverse.length-1; i >= 0; i--) {
        resultString += stringToReverse[i];
    }

    return resultString;
};

// Do not edit below this line
module.exports = reverseString;

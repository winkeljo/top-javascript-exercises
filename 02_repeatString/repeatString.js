const repeatString = function(stringToRepeat, repetitions) {
    resultString = "";

    if (repetitions < 0) return "ERROR";

    for (let i = 0; i < repetitions; i++) {
        resultString += stringToRepeat;
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;

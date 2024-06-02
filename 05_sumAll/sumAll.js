const sumAll = function(startNumber, endNumber) {
    if (typeof startNumber !== "number" || typeof endNumber !== "number") return "ERROR";
    if (startNumber < 0 || endNumber < 0) return "ERROR";

    let sum = 0;
    if (startNumber > endNumber) {
        const backupNumber = startNumber;
        startNumber = endNumber;
        endNumber = backupNumber;
    }

    for (let i = startNumber; i <= endNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

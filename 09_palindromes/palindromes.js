const palindromes = function (palindomeToCheck) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    stringArray = palindomeToCheck.toLowerCase().split("").filter((character) => alphanumerical.includes(character));
    reversedArray = palindomeToCheck.toLowerCase().split("").filter((character) => alphanumerical.includes(character)).reverse();

    if(stringArray.toString() === reversedArray.toString()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

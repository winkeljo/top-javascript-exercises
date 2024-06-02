const removeFromArray = function(arrayBefore) {
    let arrayAfter = arrayBefore;

    for (let i = 1; i < arguments.length; i++) {
        
        // If a value is in the array multiple times, all need to be deleted
        while (arrayAfter.indexOf(arguments[i]) !== -1) {
            const index = arrayAfter.indexOf(arguments[i])
            if (index > -1) {
                arrayAfter.splice(index, 1);
            } 
        }
    }

    return arrayAfter;
};

// Do not edit below this line
module.exports = removeFromArray;

removeFromArray([1,2,3,4], 3);

const fibonacci = function(number) {

    if (typeof number === "string") number = Number(number);

    if (number < 0) return "OOPS";

    if (number === 0) return 0;

    if (number === 1 || number === 2) return 1;

    return fibonacci(number - 1) + fibonacci(number - 2);
};

// Do not edit below this line
module.exports = fibonacci;

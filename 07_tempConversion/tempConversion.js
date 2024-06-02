const convertToCelsius = function(temperatureFahrenheit) {

  if (typeof temperatureFahrenheit !== "number") return "ERROR";

  return Math.round(((temperatureFahrenheit - 32) * (5 / 9)) * 10) / 10;
  -32*5/9
};


const convertToFahrenheit = function(temperatureCelsius) {

  if (typeof temperatureCelsius !== "number") return "ERROR";

  return Math.round(((temperatureCelsius * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

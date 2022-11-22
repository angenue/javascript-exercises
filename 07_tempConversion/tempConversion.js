const convertToCelsius = function(num) {
  var celsius = 5 * (num - 32) / 9;
  var celsius = Math.round(celsius*10)/10;
  return celsius;
};

const convertToFahrenheit = function(num) {
  var fahrenheit = ((num * 9) / 5) + 32;
  var fahrenheit = Math.round(fahrenheit*10)/10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const convertToCelsius = function(grades) {
  let conversionToCelsius = (grades - 32) / 1.8000;
  let temp = 0;

  if (Number.isInteger(conversionToCelsius)) {
    temp = conversionToCelsius;
  } else {
    temp = Number(conversionToCelsius.toFixed(1));
  }

  console.log(temp + " Celsius");
  return temp;
  // C = F - 32 / 1.8000
};

const convertToFahrenheit = function(grades) {
  let conversionToFahr = (grades * 1.8) + 32;
  let temp = 0;

  if (Number.isInteger(conversionToFahr)) {
    temp = conversionToFahr;
  } else {
    temp = Number(conversionToFahr.toFixed(1));
  }

  console.log(temp + " Fahrenheit");
  return temp;

  // F = (celsius * 1.8) + 32
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

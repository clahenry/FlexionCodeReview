function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  var outputCelcius = (valNum - 32) / 1.8;
  if (isFloat(outputCelcius)) {
    outputCelcius.toFixed(2);
  }
  document.getElementById("outputCelcius").innerHTML = outputCelcius;
}

function temperatureConverter2(valNum) {
  valNum = parseFloat(valNum);
  let outputFahrenheit = valNum * 1.8 + 32;
  document.getElementById("outputFahrenheit").innerHTML =
    outputFahrenheit.toFixed(2);
}

function temperatureConverter3(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputRankine").innerHTML = valNum * 1.8;
}

function temperatureConverter4(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputKelvin").innerHTML = valNum / 1.8;
}

function isFloat(num) {
  console.log(num);
  return Number(num) === num && num % 1 !== 0;
}

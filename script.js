function myFunction(ftemp) {
  const measureArr = ["fahrenheit", "celsius", "kelvin", "rankine"];

  var input = document.getElementById("myInput").value;
  //Check for number and not a char otherwise return invalid
  if (isNaN(input)) {
    return invalid();
  }
  //Check to ensure string is not empty otherwise return invalid
  if (input.length === 0) {
    return invalid();
  }
  input = parseFloat(input);
  const from = document.getElementById("fromSelect");
  const from_temp = from.value;

  const to = document.getElementById("toSelect");
  const to_temp = to.value;

  //Check to ensure the temperature scale is value selection from listbox otherwise return invalid.
  if (!measureArr.includes(from_temp) || !measureArr.includes(to_temp)) {
    return invalid();
  }

  //Comparing the selected temperature and applying the formula.
  if (from_temp === "fahrenheit" && to_temp === "celsius") {
    outtemp = ((input - 32) * 5) / 9;
  } else if (from_temp === "fahrenheit" && to_temp === "kelvin") {
    outtemp = ((input + 459.67) * 5) / 9;
  } else if (from_temp === "fahrenheit" && to_temp === "rankine") {
    outtemp = input + 459.67;
  } else if (from_temp === "celsius" && to_temp === "fahrenheit") {
    outtemp = (input * 9) / 5 + 32;
  } else if (from_temp === "celsius" && to_temp === "kelvin") {
    outtemp = input + 273.15;
  } else if (from_temp === "celsius" && to_temp === "rankine") {
    outtemp = (input * 9) / 5 + 491.67;
  } else if (from_temp === "kelvin" && to_temp === "celsius") {
    outtemp = input - 273.15;
  } else if (from_temp === "kelvin" && to_temp === "rankine") {
    outtemp = input * 1.8;
  } else if (from_temp === "kelvin" && to_temp === "fahrenheit") {
    outtemp = ((input - 273.15) * 9) / 5 + 32;
  } else if (from_temp === "rankine" && to_temp === "fahrenheit") {
    outtemp = input - 459.67;
  } else if (from_temp === "rankine" && to_temp === "celsius") {
    outtemp = ((input - 491.67) * 5) / 9;
  } else if (from_temp === "rankine" && to_temp === "kelvin") {
    outtemp = (input * 5) / 9;
  } else if (from_temp === "fahrenheit" && to_temp === "fahrenheit") {
    return invalid();
  } else if (from_temp === "celsius" && to_temp === "celsius") {
    return invalid();
  } else if (from_temp === "kelvin" && to_temp === "kelvin") {
    return invalid();
  } else if (from_temp === "rankine" && to_temp === "rankine") {
    return invalid();
  }
  document.getElementById("outputvalue").innerHTML = outtemp.toFixed(2);
}

function invalid() {
  return (document.getElementById("outputvalue").innerHTML = "invalid");
}

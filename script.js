const temperatureInput = document.getElementById('temperature');
const fromSelect = document.getElementById('from');
const resultInput = document.getElementById('result');
const toSelect = document.getElementById('to');
const convertButton = document.getElementById('convertButton');

function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  const from = fromSelect.value;
  const to = toSelect.value;
  let result;

  if (from === 'celsius' && to === 'fahrenheit') {
    result = (temperature * 9 / 5) + 32;
  } else if (from === 'celsius' && to === 'kelvin') {
    result = temperature + 273.15;
  } else if (from === 'fahrenheit' && to === 'celsius') {
    result = (temperature - 32) * 5 / 9;
  } else if (from === 'fahrenheit' && to === 'kelvin') {
    result = ((temperature - 32) * 5 / 9) + 273.15;
  } else if (from === 'kelvin' && to === 'celsius') {
    result = temperature - 273.15;
  } else if (from === 'kelvin' && to === 'fahrenheit') {
    result = ((temperature - 273.15) * 9 / 5) + 32;
  } else {
    result = temperature; // If from and to are the same, no conversion needed.
  }

  resultInput.value = result.toFixed(2);
}

convertButton.addEventListener('click', convertTemperature);

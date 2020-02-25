// Define UI variables
const form = document.querySelector('#temp-form');
const submitBTN = document.querySelector('.btn');
const inputTemp = document.querySelector('#f-temp');

function loadEventListeners () {
	submitBTN.addEventListener(`click`, convertTemp);
}

loadEventListeners();

function convertTemp (e) {
	if (inputTemp.value === '') {
		alert('You must enter a number to convert! ');
	}
	else {
		// Reveal results
		document.getElementById('results').style.display = 'block';
		// Celsius Calculation
		const outputC = document.querySelector('#celsius');
		outputCelsius = (inputTemp.value - 32) * (5 / 9);
		outputC.value = outputCelsius.toFixed(2);

		// Kelvin Calculation (Keep it simple)
		const outputK = document.querySelector('#kelvin');
		outputKelvin = outputCelsius + 273.15;
		outputK.value = outputKelvin.toFixed(3);
	}

	// prevent default action
	e.preventDefault();
}

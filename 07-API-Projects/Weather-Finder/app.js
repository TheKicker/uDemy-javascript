// Init other files
const weather = new OpenWeather();
const ui = new UI();

// Create event listner for doc to load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather () {
	weather.getWeather().then((results) => ui.paint(results)).catch((err) => console.log(err));
}

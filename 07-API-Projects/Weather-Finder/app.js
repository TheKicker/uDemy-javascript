// Init new Storage object
const ls = new Storage();
// Check if there is existing location data for this user in local storage
const weatherLocation = ls.getLocationData();
// Fetch data using the city and state provided (either chosen or default)
const ow = new OpenWeather(weatherLocation.city, weatherLocation.state);
// Init new UI object for painting later
const ui = new UI();

// Create event listner for doc to load, then fire function
document.addEventListener('DOMContentLoaded', getWeatherFunction);

// Using get weather method from weather.js
function getWeatherFunction () {
	// This will return a promise because we used async in weather.js so treat this as one
	ow
		.getWeather()
		// when results are returned, paint them (promise fulfilled)
		.then((results) => {
			ui.paint(results);
		})
		// If an error occurs, log the error (promise unfulfilled)
		.catch((err) => console.log(err));
}

// Change location event initiated by the user clicking button in modal
document.getElementById('w-change-btn').addEventListener('click', (e) => {
	// Init our elements and the values written by the user
	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value;
	// Change our weather lookup to new location
	ow.changeLocation(city, state);
	// Set new location in LS
	ls.setLocationData(city, state);
	// Fetch the weather
	getWeatherFunction();
	// JQuery to hide the modal
	$('#locModal').modal('hide');
});

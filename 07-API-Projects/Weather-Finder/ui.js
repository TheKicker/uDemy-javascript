// Create UI object
class UI {
	// Grab the elements where our values will be placed later
	constructor () {
		this.location = document.getElementById('w-location');
		this.description = document.getElementById('w-desc');
		this.string = document.getElementById('w-string');
		this.details = document.getElementById('w-details');
		this.icon = document.getElementById('w-icon');
		this.humidity = document.getElementById('w-humidity');
		this.feelsLike = document.getElementById('w-feels-like');
		this.dewpoint = document.getElementById('w-dewpoint');
		this.wind = document.getElementById('w-wind');
		this.latlon = document.getElementById('w-lat-lon');
	}

    // Method for writing our dynamic API results to HTML elements
    // Creatively called Paint :)
	paint (results) {
		this.location.textContent = `${results.name}, ${results.sys.country}`;
		this.description.textContent = `${results.main.temp}ºF`;
		this.string.textContent = `Currently ${results.weather[0].description}`;
		// this.icon.setAttribute('src', results.weather[0].icon);
		this.humidity.textContent = `Humidity at ${results.main.humidity}%`;
		this.dewpoint.textContent = `High: ${results.main.temp_max}, Low: ${results.main.temp_min}`;
		this.feelsLike.textContent = `Feels like ${results.main.feels_like}ºF`;
		this.wind.textContent = `Wind speed ${results.wind.speed}mph at ${results.wind.deg}`;
		this.latlon.textContent = `LON: ${results.coord.lon}, LAT: ${results.coord.lat}`;
	}
}

// Create weather object
class OpenWeather {
	// Constructor takes in API key and city/state parameters
	constructor (city, state) {
		this.api_key = '6730cd7888a23975974cced09a509f2d';
		this.city = city;
		this.state = state;
	}

	// Fetch weather from OpenWeather API using Async/Await
	async getWeather () {
		// Fetch JSON from API url
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${state}&units=imperial&appid=${this.api_key}`
		);
		// Read and return the JSON object
		const responseData = await response.json();
		return responseData;
	}

	// Method for changing location when a user desires
	changeLocation (cityInput, stateInput) {
		// Set city and state as the values from the inputs
		this.city = cityInput;
		this.state = stateInput;
	}
}

class OpenWeather {
	constructor (city = 'Columbus', state = 'Ohio') {
		this.api_key = '6730cd7888a23975974cced09a509f2d';
		this.city = city;
		this.state = state;
	}

	// Fetch weather from API
	async getWeather () {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${state}&appid=${this.api_key}`);

		const responseData = await response.json();

		return responseData;
	}

	changeLocation (city, state) {
		this.city = city;
		this.state = state;
	}
}

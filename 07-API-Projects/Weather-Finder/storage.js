// Create Storage object
class Storage {
	// Initialize city and state variables along with default values for both
	constructor () {
		this.city;
		this.state;
		this.defaultCity = 'Tampa';
		this.defaultState = 'FL';
	}
	// Method for retrieving location data in local storage for the user
	getLocationData () {
		// Check if there is a set value, otherwise use default value
		if (localStorage.getItem('city') === null) {
			this.city = this.defaultCity;
		}
		else {
			this.city = localStorage.getItem('city');
		}
		// Check if there is a set value, otherwise use default value
		if (localStorage.getItem('state') === null) {
			this.state = this.defaultState;
		}
		else {
			this.state = localStorage.getItem('state');
		}
		// Return the city and state
		return {
			city: this.city,
			state: this.state
		};
	}

	// Method for setting user defined city and state as default location
	setLocationData (city, state) {
		localStorage.setItem('city', city);
		localStorage.setItem('state', state);
	}
}

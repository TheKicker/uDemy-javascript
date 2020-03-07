function easyHTTP () {
	this.http = new XMLHttpRequest();
}

// Four different prototype methods (ES5 Standards)
// CREATE - Post //
easyHTTP.prototype.post = function (url, data, callback) {
	this.http.open('POST', url, true);
	this.http.setRequestHeader('Content-type', 'application/json');

	let self = this;
	this.http.onload = function () {
		callback(null, self.http.responseText);
	};

	this.http.send(JSON.stringify(data));
};

// READ - Get //
easyHTTP.prototype.get = function (url, callback) {
	this.http.open('GET', url, true);

	// ES5 way without call back.  Works here but not in app because data is being added BEFORE being created
	/*
	let self = this;
	this.http.onload = function () {
		if (self.http.status === 200) {
			console.log(self.http.responseText);
		}
	};
	*/

	// Proper ES5 way
	let self = this;
	this.http.onload = function () {
		if (self.http.status === 200) {
			callback(null, self.http.responseText);
		}
		else {
			callback('Error Code: ' + self.http.status);
		}
	};

	// ES6 way
	/*
	this.http.onload = () => {
		if (this.http.status === 200) {
			console.log(this.http.responseText);
		}
	};
	*/

	this.http.send();
};

// UPDATE - Put //
easyHTTP.prototype.put = function (url, data, callback) {
	this.http.open('PUT', url, true);
	this.http.setRequestHeader('Content-type', 'application/json');

	let self = this;
	this.http.onload = function () {
		callback(null, self.http.responseText);
	};

	this.http.send(JSON.stringify(data));
};

// DELETE - Delete //
easyHTTP.prototype.delete = function (url, callback) {
	this.http.open('DELETE', url, true);

	let self = this;
	this.http.onload = function () {
		if (self.http.status === 200) {
			callback(null, 'Post deleted');
		}
		else {
			callback('Error Code: ' + self.http.status);
		}
	};

	this.http.send();
};

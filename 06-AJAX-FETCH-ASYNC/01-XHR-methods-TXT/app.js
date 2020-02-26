// Add UI event listeners
document.getElementById('button').addEventListener('click', fetchData);

function fetchData () {
	// Create our XHR object
	const xhr = new XMLHttpRequest();

	// Open file (type of request, file name, async t/f)
	xhr.open('GET', 'data.txt', true);

	// Optional area for loading status (fidget spinner!)
	xhr.onprogress = function () {
		console.log(`xhr.onprogress -- `, xhr.readyState);
	};

	// When the data is ready, do what we need to do with it
	// Ready state value 4 (see bottom)
	xhr.onload = function () {
		/*  First, we want to check the status (HTTP 200, 400, etc.)
            200: OK
            403: Forbidden
            404: Not Found
            418: I'm a teapot
        */
		if (this.status === 200) {
			// Great everything is okay!
			console.log(`on load -- ${this.responseText}`);

			// Example of loading data
			document.getElementById('output').innerHTML = `<h1> ${this.responseText} </h1>`;
		}
		else {
			console.log('Your file did not load. ');
		}
	};

	// onload is new, this onreadystatechange is the old way
	xhr.onreadystatechange = function () {
		if (this.status === 200 && this.readyState === 4) {
			console.log(`Ready state change -- ${this.responseText}`);
		}
		else {
		}
	};

	// In case something goes on, good practice to include
	xhr.onerror = function () {
		console.log('There was an error. ');
	};

	// To complete our request we must 'send'
	xhr.send();
}

/*  Ready State Values when working with XHR
        0: Request not initalized
        1: Server connection established 
        2: Request received 
        3: Processing Request
        4: Request finished, response is ready
*/

/*
*
*	EasyHTTP3 Library
*	Library for making HTTP requests using Async Await 
*
*	@version 3.0
*	@author TheKicker on Github
* 	@license MIT
* 
*/

class easyHTTP {
	// Make CRUD requests
	// Post or Create
	async post (url, data) {
		// When we make a post request, we have to add in an object with a few definitions
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'applications/json'
			},
			body: JSON.stringify(data)
		});

		const resData = await response.json();

		return resData;
	}

	// Get or Read
	async get (url) {
		const response = await fetch(url);

		const resData = await response.json();

		return resData;
	}
	// Put or Update
	async put (url, data) {
		// When we make a put request, we have to add in an object with a few definitions
		// Also, make sure the URL you are updating is valid.
		const put = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-type': 'applications/json'
			},
			body: JSON.stringify(data)
		});

		const putData = await put.json();

		return putData;
	}
	// Delete or Delete
	async delete (url) {
		// When we make a delete request, we only need the URL of the object we are removing

		const response = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json'
			}
		});
		const resData = await 'Resource deleted :) ';

		return resData;
	}
}

/*
*
*	EasyHTTP2 Library
*	Library for making HTTP requests using Fetch
*
*	@version 2.0
*	@author TheKicker on Github
* 	@license MIT
* 
*/

class easyHTTP {
	// Make CRUD requests
	// Post or Create
	post (url, data) {
		return new Promise((resolve, reject) => {
			// When we make a post request, we have to add in an object with a few definitions
			fetch(url, {
				method: 'POST',
				headers: {
					'Content-type': 'applications/json'
				},
				body: JSON.stringify(data)
			})
				.then((res) => res.json())
				.then((data) => resolve(data))
				.then((err) => reject(err));
		});
	}

	// Get or Read
	get (url) {
		return new Promise((resolve, reject) => {
			fetch(url).then((res) => res.json()).then((data) => resolve(data)).then((err) => reject(err));
		});
	}
	// Put or Update
	put (url, data) {
		return new Promise((resolve, reject) => {
			// When we make a put request, we have to add in an object with a few definitions
			// Also, make sure the URL you are updating is valid.
			fetch(url, {
				method: 'PUT',
				headers: {
					'Content-type': 'applications/json'
				},
				body: JSON.stringify(data)
			})
				.then((res) => res.json())
				.then((data) => resolve(data))
				.then((err) => reject(err));
		});
	}
	// Delete or Delete
	delete (url) {
		return new Promise((resolve, reject) => {
			// When we make a delete request, we only need the URL of the object we are removing

			fetch(url, {
				method: 'DELETE',
				headers: {
					'Content-type': 'applications/json'
				}
			})
				.then((res) => res.json())
				.then((data) => resolve('Resource deleted...'))
				.then((err) => reject(err));
		});
	}
}

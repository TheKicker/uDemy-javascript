/*
    Dog Image API compliments of: 
        https://dog.ceo/dog-api/documentation/random
*/

document.querySelector('.fetch-doggo').addEventListener('click', fetchDoggo);

function fetchDoggo (e) {
	const url = 'https://dog.ceo/api/breeds/image/random';

	const xhr = new XMLHttpRequest();

	xhr.open('GET', url, true);

	xhr.onload = function () {
		if (this.status === 200) {
			const response = JSON.parse(this.responseText);

			let image = response.message;

			if (response.status === 'success') {
				output = `<img src="${image}" alt="The bestest doggo">`;
			}
			else {
				output += '<h2> Something went wrong... </h2>';
			}

			document.querySelector('.dog-house').innerHTML = output;
		}
	};

	xhr.send();
	e.preventDefault();
}

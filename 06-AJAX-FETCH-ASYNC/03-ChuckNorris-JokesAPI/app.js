document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes (e) {
	const number = document.querySelector('input[type="number"]').value;
	const url = `http://api.icndb.com/jokes/random/${number}`;
	const xhr = new XMLHttpRequest();

	xhr.open('GET', url, true);

	xhr.onload = function () {
		if (this.status === 200) {
			const response = JSON.parse(this.responseText);

			let output = '';

			if (response.type === 'success') {
				response.value.forEach(function (joke) {
					output += `<li>#${joke.id} -- ${joke.joke}</li>`;
				});
			}
			else {
				output += '<li> Something went wrong... </li>';
			}

			document.querySelector('.jokes').innerHTML = output;
		}
	};

	xhr.send();

	e.preventDefault();
}

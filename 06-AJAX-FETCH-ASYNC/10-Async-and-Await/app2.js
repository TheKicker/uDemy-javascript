async function getUsers () {
	// We await the response of the fetch call
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	// We only proceed once its resolved
	const data = await response.json();
	// Only proceed onces second promise is resolved
	return data;
}

getUsers().then((users) => console.log(users));

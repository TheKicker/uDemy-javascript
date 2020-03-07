// Original way
function myFunc1 () {
	return 'Hello from 1';
}

// When we add the async keyword, makes this function initialize as a promise
async function myFunc2 () {
	// Notice in the console log this is a full promise

	const promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve('Hello from 2'), 10000);
	});

	const error = true;

	if (!error) {
		const res = await promise; // Wait until promise is resolved
	}
	else {
		await Promise.reject(new Error('Something went wrong'));
	}

	return res;
}

myFunc2().then((res) => console.log(res)).catch((err) => console.log(err));

console.log(myFunc1());

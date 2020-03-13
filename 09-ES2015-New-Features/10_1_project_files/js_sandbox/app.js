// Iterator Example
function nameIterator (names) {
	let nextIndex = 0;

	// Return an object with a next function
	return {
		next: () => {
			// Return nextIndex while less than names.length THEN add 1 and done status is false ELSE done status is true
			return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true };
		}
	};
}

// Create an array of names
const namesArr = [ 'Jack', 'Jill', 'John', 'James', 'Jacques', 'Jaxon', 'Jackie', 'Jameson' ];
// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

// Generator Example
function* sayNames () {
	yield 'Coke';
	yield 'Pepsi';
	yield 'Sprite';
	yield 'Orange';
}
const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// ID Creator
function* createIds () {
	let index = 1;

	while (true) {
		yield index++;
	}
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

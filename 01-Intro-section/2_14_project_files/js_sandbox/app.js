// FUNCTION DECLARATIONS

function greet (firstName = 'John', lastName = 'Doe') {
	// Set default values within the parameters via ES6
	// if(typeof firstName === 'undefined'){firstName = 'John'}
	// if(typeof lastName === 'undefined'){lastName = 'Doe'}
	//console.log('Hello');
	return `Hello ${firstName} ${lastName}.  Nice to meet you. `;
}

console.log(greet('Billy', 'Smith'));

// FUNCTION EXPRESIONS

const square = function (x = 22) {
	return x * x;
};

console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function () {
	console.log('IIFE Ran..');
})();

(function (name = 'Guest') {
	console.log('Hello ' + name);
})('Zachary');

// PROPERTY METHODS

const todo = {
	add: function () {
		console.log('Add todo..');
	},
	edit: function (id) {
		console.log(`Edit todo ${id}`);
	},
	foo: function (id) {
		console.log(`Foo ur ${id}th todo`);
	}
};

// Can add functionality after the fact
todo.delete = function () {
	console.log('Delete todo...');
};

todo.add();
todo.edit(22);
todo.foo(5);
todo.delete();

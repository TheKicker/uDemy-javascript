// Prototype inheritance allows us to connect different objects according to
// the reason and standard for connecting them.  Here we use a person and customer
// connection to simulate this practice.

// Person constructor
function Person (f, l) {
	this.firstName = f;
	this.lastName = l;
}

// Greeting
Person.prototype.greeting = function () {
	return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('Elon', 'Musk');

console.log(person1.greeting());

// Customer constructor
function Customer (f, l, p, m) {
	Person.call(this, f, l);

	this.phone = p;
	this.membership = m;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Donald J.', 'Trump', '555-555-5555', 'Gold');

// Customer greeting
Customer.prototype.greeting = function () {
	return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
};

console.log(customer1.greeting());

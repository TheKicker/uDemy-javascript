/*
    NOTE: THIS IS FOR LEARNING PURPOSES ONLY

    THIS IS BUILT ON OLD ES5 STANDARDS

    FOR AN UPDATED MODEL VIEW appES6.js
*/

// Book Constructor - Creates the book object
function Book (title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

// UI Constructor - Creates prototypes for use in the UI (alerts, table handling, etc. )
function UserInterface () {}

UserInterface.prototype.addBookToList = function (book) {
	const list = document.getElementById('book-list');
	// Create an element
	const row = document.createElement('tr');
	// Insert columns  into row
	row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

	list.appendChild(row);
};

UserInterface.prototype.deleteBook = function (target) {
	if (target.className === 'delete') {
		// DOM traversal from X to the whole row
		target.parentElement.parentElement.remove();
		console.log(`${target} Book removed. `);
	}
	else {
		console.log(`${target} Book removal error. `);
	}
};

UserInterface.prototype.clearFields = function () {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
};

UserInterface.prototype.showAlert = function (msg, className) {
	// Create the element
	const div = document.createElement('div');
	// Assign Styling & Text
	div.className = `alert ${className}`;
	div.appendChild(document.createTextNode(msg));
	// Insert into dom
	const parent = document.querySelector('.container');
	const form = document.querySelector('#book-form');
	// Location, insert before (what, where)
	parent.insertBefore(div, form);

	// Remove after x seconds
	setTimeout(function () {
		document.querySelector('.alert').remove();
	}, 3000);
};

// Create event listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
	// Get form values from user input
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const isbn = document.getElementById('isbn').value;

	// Instantiate book
	const book = new Book(title, author, isbn);

	// Instantiate UI
	const userInterface = new UserInterface();

	// Validate our book
	if (title === '' || author === '' || isbn === '') {
		// Error alert
		userInterface.showAlert('Missing required information', 'error');
	}
	else {
		// Add book to UI list
		userInterface.addBookToList(book);

		// Success alert
		userInterface.showAlert('Book added succesfully! ', 'success');

		// Clear input fields
		userInterface.clearFields();
	}

	// Prevent redirect default action by link
	e.preventDefault();
});

// Event listener delete function
document.getElementById('book-list').addEventListener('click', function (e) {
	// Instantiate UI
	userInterface = new UserInterface();
	userInterface.deleteBook(e.target);

	e.preventDefault();
});

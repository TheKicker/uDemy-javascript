// user = 'Cav';
// console.log(`${user}, no worries, I am functional!`);

// Define UI Variables
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
function loadEventListeners () {
	// Add task event (listen event, what to do)
	form.addEventListener('submit', addTask);
}

function addTask (e) {
	if (taskInput.value === '') {
		alert('Please enter a task before trying to submit! ');
	}
	// Create LI element
	const li = document.createElement('li');
	li.className = 'collection-item';
	// Create text node and append to LI
	li.appendChild(document.createTextNode(taskInput.value));
	// Add new delete link for that task
	const link = document.createElement('a');
	// Materialize specific classnames
	link.clasName = 'delete-item secondary-content';
	// Add HTML icon from font awesomne
	link.innerHTML = '<i class="fa fa-remove"></li>';
	// Append the link to LI
	li.appendChild(link);

	// Append LI to UL
	tasklist.appendChild(li);
	// Clear the input field
	taskInput.value = '';

	e.preventDefault();
}

loadEventListeners();

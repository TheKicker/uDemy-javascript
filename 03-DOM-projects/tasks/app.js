// Define UI variables we will use
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
function loadEventListeners () {
	// DOM Load event
	document.addEventListener('DOMContentLoaded', fetchTasks);
	// Add task event
	form.addEventListener('submit', addTask);
	// Remove task event
	taskList.addEventListener('click', removeTask);
	// Clear task event
	clearBtn.addEventListener('click', clearTasks);
	// Filter tasks event
	filter.addEventListener('keyup', filterTasks);
}

// Load all event listeners
loadEventListeners();

// Retrieve tasks from Local Storage
function fetchTasks () {
	let tasks;
	// Check for tasks, if empty create an empty array
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	}
	else {
		// If exists, return JSON array of tasks
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	// Loop through the array creating all the task elements that exist
	tasks.forEach(function (task) {
		// Create li element
		const li = document.createElement('li');
		// Add class
		li.className = 'collection-item';
		// Create text node and append to li
		li.appendChild(document.createTextNode(task));
		// Create new link element
		const link = document.createElement('a');
		// Add class name
		link.className = 'delete-item secondary-content';
		// Add delete icon html
		link.innerHTML = '<i class="fa fa-remove"></i>';
		// Append the link to li
		li.appendChild(link);

		// Append li to ul
		taskList.appendChild(li);
	});
}

// Add Task
function addTask (e) {
	if (taskInput.value === '') {
		alert('Please add a task');
	}
	else {
		// Create li element
		const li = document.createElement('li');
		// Add class
		li.className = 'collection-item';
		// Create text node and append to li
		li.appendChild(document.createTextNode(taskInput.value));
		// Create new link element
		const link = document.createElement('a');
		// Add class
		link.className = 'delete-item secondary-content';
		// Add delete icon html
		link.innerHTML = '<i class="fa fa-remove"></i>';
		// Append the link to li
		li.appendChild(link);

		// Append li to ul
		taskList.appendChild(li);

		// Store in local storage
		storeTaskInLocalStorage(taskInput.value);

		// Clear input field for next task
		taskInput.value = '';
	}
	// Prevent default action of links (to redirect to another page)
	e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage (task) {
	let tasks;
	// Check if a task array exists
	if (localStorage.getItem('tasks') === null) {
		// Create empty task array (will be a string remember)
		tasks = [];
	}
	else {
		// Fetch the JSON task array
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	// Add task to task array
	tasks.push(task);
	// Convert to string for local storage to hold onto
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask (e) {
	// Target the parent element of the <i>
	if (e.target.parentElement.classList.contains('delete-item')) {
		if (confirm('Are You Sure?')) {
			// Removes the element from DOM (be careful about correct targeting)
			e.target.parentElement.parentElement.remove();

			// Removes the element from local storage
			removeTaskFromLocalStorage(e.target.parentElement.parentElement);
		}
	}
}

// Remove from LS
function removeTaskFromLocalStorage (taskItem) {
	let tasks;
	// Check if array exists
	if (localStorage.getItem('tasks') === null) {
		// Create an empty array
		tasks = [];
	}
	else {
		// Fetch the JSON array
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	// Loop through array
	tasks.forEach(function (task, index) {
		if (taskItem.textContent === task) {
			tasks.splice(index, 1);
		}
	});

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks () {
	// Works but can be slow on bigger projects
	// taskList.innerHTML = '';

	// Faster, more efficent and preferred
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}

	// Further reading
	// https://jsperf.com/innerhtml-vs-removechild

	// Clear from local storage
	clearTasksFromLocalStorage();
}

// Clear Tasks from local storage
function clearTasksFromLocalStorage () {
	localStorage.clear();
}

// Filter Tasks
function filterTasks (e) {
	// Convert input field to lowercase value
	const text = e.target.value.toLowerCase();
	// getElementBy would return an HTML Collection
	// QueryselectorAll returns a node array allowing us to use forEach on it
	document.querySelectorAll('.collection-item').forEach(function (task) {
		const item = task.firstChild.textContent;
		// Chars that exist in the items will have an index
		// Chars that don't exist will have -1 by default
		// Here we exclude responses with -1
		if (item.toLowerCase().indexOf(text) != -1) {
			// CSS display as normal
			task.style.display = 'block';
		}
		else {
			// CSS hide it!
			task.style.display = 'none';
		}
	});
}

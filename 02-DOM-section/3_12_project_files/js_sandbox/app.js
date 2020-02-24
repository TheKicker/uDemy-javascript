// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name, age);

// Create the event listener to the form
document.querySelector('form').addEventListener('submit', function(e){
  // Reading the value from task
  const task = document.getElementById('task').value;
  // Initialize tasks 
  let tasks;  
  // If tasks is empty, create an empty array
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
    // Else parse the JSON object from string to array
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});
const http = new easyHTTP();

const content = document.getElementById('content');
// content.innerHTML = 'Hello World';

// Make an HTTP get request
http.get('https://jsonplaceholder.typicode.com/users').then((data) => console.log(data)).catch((err) => console.log(err));

// Make an HTTP post request
// Define user
user = { name: 'Noot', username: 'NewUser69', email: 'noooot@gmail.com' };
http.post('https://jsonplaceholder.typicode.com/users', user).then((data) => console.log(user)).catch((err) => console.log(err));

// Make an HTTP put request
user2 = { name: 'Nooter', username: 'NewUser69', email: 'noooot@gmail.com' };
http.put('https://jsonplaceholder.typicode.com/users/2', user2).then((data) => console.log(user2)).catch((err) => console.log(err));

// Make an HTTP delete request
http.delete('https://jsonplaceholder.typicode.com/users/6').then((data) => console.log(data)).catch((err) => console.log(err));

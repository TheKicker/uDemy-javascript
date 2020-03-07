// Typical way
const sayHello = function () {
	console.log('Hello mate!');
};

// The Way of the Arrow
const sayHola = () => {
	console.log('Hola amigo!');
};

// Spicy one liner
const sayCiao = () => console.log('Ciao amico!');

// Returning data one line
const sayBonjour = () => 'Bonjour ami!';
console.log(sayBonjour());

sayHello();
sayHola();
sayCiao();

// Using the map function and then shortening it
const users = [ 'Nathan', 'John', 'Bill', 'Cav', 'Elon', 'Samuel', 'Augustine' ];
const users2 = [ 'Zachary', 'William', 'Pedro', 'Nicholas', 'Gary', 'Dominic', 'Jaxon' ];
const users3 = [ 'Michael', 'Cary', 'Timothy', 'Jose', 'Albert', 'Reno', 'Geno' ];

// Original Function
const nameLengths = users.map(function (name) {
	return name.length;
});

// Shortened Function
const nameLengthShorter = users2.map((name) => {
	return name.length;
});

// Shortest
const nameLengthShortest = users3.map((name) => name.length);

console.log(nameLengths);
console.log(nameLengthShorter);
console.log(nameLengthShortest);

// Going back to an old file - the Fetch API tutorial
// Original code commented out

/*

function getText() {
  fetch('test.txt')
    .then(function(res){
      return res.text();
    })
    .then(function(data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
      console.log(err);
    });
}

*/

// New code shortened
function getText () {
	fetch('test.txt')
		.then((res) => res.text())
		.then((data) => {
			console.log(data);
			document.getElementById('output').innerHTML = data;
		})
		.catch((err) => console.log('Error'));
}

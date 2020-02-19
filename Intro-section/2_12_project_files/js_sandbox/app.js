// if(something){
//   do something
// } else {
//   do something else
// }

const id = 100;

// EQUAL TO
if (id == 100) {
	console.log('T1 CORRECT EQUAL TO 100');
}
else {
	console.log('T1 INCORRECT NOT EQUAL TO 100');
}

// NOT EQUAL TO
if (id != 101) {
	console.log('T2 CORRECT IS NOT EQUAL TO 101');
}
else {
	console.log('T2 INCORRECT IS EQUAL TO 101');
}

// EQUAL TO VALUE & TYPE
if (id === 100) {
	console.log('T3 CORRECT VALUE AND TYPE');
}
else {
	console.log('T3 INCORRECT VALUE &/OR TYPE');
}

// EQUAL TO VALUE & TYPE
if (id !== 100) {
	console.log('T4 CORRECT NOT EQUAL TO VALUE AND TYPE');
}
else {
	console.log('T4 INCORRECT EQUAL TO VALUE AND TYPE');
}

// Test if undefined
if (typeof id !== 'undefined') {
	console.log(`T5 The ID is ${id}`);
}
else {
	console.log('T5 NO ID');
}

// GREATER OR LESS THAN
if (id <= 100) {
	console.log('T6 CORRECT');
}
else {
	console.log('T6 INCORRECT');
}

// IF ELSE

const color = 'yellow';

// if(color === 'red'){
//   console.log('Color is red');
// } else if(color === 'blue'){
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS

const name = 'Steve';
const age = 56;

// AND &&
if (age > 0 && age < 12) {
	console.log(`${name} is a child`);
}
else if (age >= 13 && age <= 19) {
	console.log(`${name} is a teenager`);
}
else {
	console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
	console.log(`${name} can not run in race`);
}
else {
	console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if (id === 100) console.log('CORRECT');
else console.log('INCORRECT');

if (id === 100) console.log('CORRECT');
else console.log('INCORRECT');

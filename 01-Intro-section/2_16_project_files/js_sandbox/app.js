// WINDOW METHODS / OBJECTS / PROPERTIES
let uno = 123;
console.log(`${uno} - START`);

// Alert;
// alert('Hello World');

// Prompt;
// const input = prompt();
// alert(input);

// const userName = prompt('Please enter your name: ');
// alert(`Welcome ${userName}`);

// Confirm;
// if (confirm('Are you sure')) {
// 	console.log('YES');
// }
// else {
// 	console.log('NO');
// }

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points - for animating objects as the user scrolls down?
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
//window.location.href = 'http://google.com';
//Reload
//window.location.reload();

// History Object - Where the user visited before you

// window.history.go(-2);
// val = window.history.length;

// Navigator Object - Chrome, Firefox, Safari, Explorer, Edge, etc.
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);

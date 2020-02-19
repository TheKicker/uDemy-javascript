let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

let month = today.getMonth();
val = today.getDate();
let day = today.getDay();
let year = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

// Experimenting with template literals
// Remember the backtick! :)
let obj = `The month is ${month} and the day is ${day} and the year is ${year}`;

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(obj);
console.log(' Your birthday is ' + birthday);

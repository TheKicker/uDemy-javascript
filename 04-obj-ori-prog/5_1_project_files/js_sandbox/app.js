// Person constructor, requires name and dob argument
function Person(name, dob) {
  // Sets name as first argument value
  this.name = name;
  // Tells JS to read the 2nd argument as a date 
  this.birthday = new Date(dob);
  // 
  this.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john.age);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());

// constructor is used in the creation of the class and any arguments passed in when a new instance is created are available in the constructor function

class Person {
  // assign a default value when name is not given
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi! I am ${this.name}.`;
  }
  getPersonDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

let me = new Person('Roy Scheffers', 34);
console.log(me.getGreeting());
console.log(me.getPersonDescription());

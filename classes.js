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

class Employee extends Person {
  constructor(name, age, title) {
    super(name, age);
    // super calls the parent class constructor function and sets the initial values like name and age.
    this.title = title;
  }
  getGreeting() {
    if(this.title) {
      return `Hi! I am ${this.name}. I work as a ${this.title}.`;
    } else {
      return super.getGreeting();
    }
  }
  hasJob() {
    return `Has a job: ${!!this.title}`;
  }
}

class Programmer extends Person {
  constructor(name, age, preferredLanguage = 'assembly') {
    super(name, age);
    this.preferredLanguage = preferredLanguage;
  }
  getGreeting() {
    return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developer.`;
  }
}

let dave = new Employee('Dave');
console.log(dave.getGreeting());

let john = new Programmer('John', 37, 'JavaScript');
console.log(john.getGreeting());

let me = new Employee('Roy Scheffers', 34, 'Front-end Web Developer');
console.log(me.getGreeting());

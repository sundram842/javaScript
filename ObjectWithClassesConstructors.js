// ES6 class for creating Person objects
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method defined within the class
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

// Creating instances of Person using the class
const person1 = new Person("John", 25);
const person2 = new Person("Alice", 30);

// Using the method defined within the class
person1.sayHello(); // Output: Hello, my name is John and I'm 25 years old.
person2.sayHello(); // Output: Hello, my name is Alice and I'm 30 years old.

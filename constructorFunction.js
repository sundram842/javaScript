/**
 * 
In JavaScript, constructor functions are a way to create objects with a blueprint or template.
 They are used to define and initialize objects
  and are particularly useful when you need to create multiple objects
   with similar properties and methods.
    Constructor functions are invoked with the new keyword,
     and they typically define the structure and behavior of objects.
 */

/**
 * Define a constructor function 'person' to create Person objects
 * @param {string} name - The name of the person
 * @param {number} age - The age of the person
 * @param {string} displayName - The display name of the person (optional)
 */
function person(name, age, displayName) {
    // Set properties for the created object using 'this'
    this.name = name;
    this.age = age;
    this.displayName = displayName;

    // Define a 'sayHello' method for the created object
    this.sayHello = function () {
        console.log(`Hello, my name is ${this.displayName} and I am ${this.age} years old.`);
    };

    // Define a 'getName' method for the created object
    this.getName = function () {
        // Check if 'displayName' is not provided, set it to the value of 'name'
        if (!this.displayName) {
            this.displayName = `${this.name}`;
        }
    };
}

// Create an instance of 'person' called 'person1' with specific values and null for 'displayName'
const person1 = new person('sundram', 12, null);

// Create another instance of 'person' called 'person2' with specific values and 'abc' for 'displayName'
const person2 = new person('Abhishek', 13, 'abc');

// Call the 'getName' method on 'person1' to set 'displayName'
person1.getName();

// Call the 'sayHello' method on 'person1' to log a greeting
person1.sayHello();




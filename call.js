/* .call() method is a part of the Function prototype.
 It is used to invoke a function with a specified this value and individual arguments.
 The syntax for the .call() method is as follows:

 functionName.call(thisArg, arg1, arg2, ...)

  functionName: The function to be called.

  thisArg: The value that will be passed as the this parameter to the function. 
  It determines the context in which the function is executed.
Using .call() is particularly useful when you want to borrow a method 
from one object and use it for another or when you want to set the context for a function explicitly.
 */

/**
 * example 1
 */

function greet(name) {
    console.log(`Hello, ${name}! I work as a software developer for 10 years.`);
}

// Using .call() to invoke the function with a specific 'this' value and arguments
greet.call(null, "John");


/**
 * example 2
 */

const person = {
  name: "Alice",
  introduce: function (age) {
    console.log(
      `Hi, I'm ${this.name} and I'm ${age} years old. I have 10 years of experience as a software developer.`
    );
  },
};

const anotherPerson = {
  name: "Bob",
};

// Using .call() to invoke the introduce function with the context of anotherPerson
person.introduce.call(anotherPerson, 30);

/**
 * In this example, the person object has a method introduce. 
 * We want to use the introduce method for another person, anotherPerson. 
 * We achieve this by using .call() and passing anotherPerson as the first argument.
 *  This sets this inside the introduce method to refer to anotherPerson. 
 * The 30 is passed as the age argument. 
 */

/**
 * Example 3
 */

// Define an object representing class1
const class1 = {
    student: 'B.Tech',
    age: '20-23'
}

// Define an object representing class2
const class2 = {
    student: 'M.Tech',
    age: '25-28'
}

// Define a function to display class details
let classDetails = function () {
    // Log the details using 'this' to refer to the current object's properties
    console.log(`Class has ${this.student} students, and the age range is ${this.age}`);
}

// Use .call() to invoke the classDetails function with the context of class1
classDetails.call(class1);

// Use .call() to invoke the classDetails function with the context of class2
classDetails.call(class2);

/**
 * 
The .apply() function in JavaScript is another method available for functions, similar to .call().
 Like .call(), .apply() allows you to invoke a function with a specified
  this value and an array (or an array-like object) of arguments.
Here is the syntax for the .apply() method:
functionName.apply(thisArg, [arg1, arg2, ...]);

functionName: The function to be called.
thisArg: The value that will be passed as the this parameter to the function,
 determining the context in which the function is executed.
[arg1, arg2, ...]: An array or an array-like object containing the arguments to be passed to the function.
Here's a simple example to illustrate how .apply() works:
 */

/**
 * example 1
 */

function greet(name, age) {
  console.log(
    `Hello, I'm ${name} and I'm ${age} years old. I have 10 years of experience as a software developer.`
  );
}
// Using .apply() to invoke the greet function with a specific 'this' value and arguments from an array
greet.apply(null, ["John", 30]);

/**
 * Example 2
 */

// Define a function called 'greeting' that takes 'name' and 'age' as parameters
function greeting(name, age) {
  // Log a message using 'this.name' and 'this.age' along with the provided 'name' and 'age'
  console.log(`${this.name} ${this.age} ${name} ${age}`);
}

// Define an object 'obj' with 'name' as 'sundram' and 'age' as '23'
const obj = {
    name: 'sundram',
    age: '23'
}

// Invoke the 'greeting' function with 'obj' as the context using .call()
// Pass 'John' as the 'name' parameter and '30' as the 'age' parameter
greeting.call(obj, 'John', '30');

// Using .apply() to invoke the greet function with a specific 'this' value and arguments from an array
greeting.apply(obj, ["John", 30]);
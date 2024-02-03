/**
 * The .bind() method in JavaScript is used to create a new function with a specified this value and,
 *  optionally, initial arguments. Unlike .call() and .apply(), which immediately invoke the function,
 *  .bind() returns a new function with the specified context 
 */

/**
 * Example - 1
 */

// Define an object 'person' with 'name' as 'sundram' and 'age' as '20'
const person = {
    name: "sundram",
    age: 20
}

// Define a function 'callFunction' that takes 'arg1' and 'arg2' as parameters
let callFunction = function(arg1, arg2) {
    // Log a message using 'this.name', 'this.age', 'arg1', and 'arg2'
    console.log(`${this.name} ${this.age} ${arg1} ${arg2}`);
}

// Use .bind() to create a new function with 'person' as the context and pre-specified arguments
const boundFunction = callFunction.bind(person, 'abhishek', '22');

// Invoking the new function created by .bind()
boundFunction();

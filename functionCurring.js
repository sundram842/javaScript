/**
 * 
 * Currying allows you to partially apply a function, creating a chain of more specialized functions. 
 * In other words, currying is the process of taking a function with multiple parameters
 */

/**
 * Example of Function Currying using .bind()
 */

// Define a function called 'functionCurring' that takes two parameters 'a' and 'b'
function functionCurring(a, b) {
    // Log the sum of 'a' and 'b'
    console.log(a + b);
}

// Use .bind() to create a curried version of 'functionCurring' with 'this' as the context and '2' pre-specified for the 'a' parameter
let callFunction = functionCurring.bind(this, 2);

// Invoke the curried function with the remaining argument '4'
callFunction(4);

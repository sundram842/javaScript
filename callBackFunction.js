/**
 * JavaScript, a callback is a function that is passed as an argument to another function
 *  and is executed after the completion of some asynchronous operation or at a specified time. 
 * Callbacks are commonly used to handle events, make asynchronous requests, 
 * and perform tasks that require waiting for some operation to finish.
 */

/**
 * example 1 for sync callBack function
 * @param {*name of persone } name 
 * @param {* age of persion} age 
 * @param {* callBack function } callBack 
 */

// Define a function called callBack with parameters name, age, and callBack
function callBack(name, age, callBack) {
  // Create a message string using the provided name and age
  let message = `my name is ${name} and I am ${age} year old`;

  // Call the provided callBack function with the message as an argument
  callBack(message);
}

// Define another function called callBackFunction with a parameter message
function callBackFunction(message) {
  // Log the received message to the console
  console.log(message);
}

// Call the callBack function with 'sundram', '18', and callBackFunction as arguments
callBack('sundram', '18', callBackFunction);


/**
 * example -2  async call back
 * 
 * not 
 * 
 * 1. set time out function is not in js it  is in node 
 */

// Define a function called asyncCallBack with parameters name, age, and callBack
function asyncCallBack(name, age, callBack) {
  // Create a message string using the provided name and age
  let message = `${name} ${age}`;

  // Set a timeout function (though this is not used correctly, as it lacks a time value)
  setTimeout(() => {
    console.log('hi i am set time out function');
  });

  // Call the provided callBack function with the message as an argument
  callBack(message);
}

// Define another function called callBackFunction with a parameter message
function callBackFunction(message) {
  // Log the received message to the console
  console.log(`${message}`);
}

// Call the asyncCallBack function with "sundram", 32, and callBackFunction as arguments
asyncCallBack("sundram", 32, callBackFunction);

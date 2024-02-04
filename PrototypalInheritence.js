/**
 * prototype-based inheritance is a fundamental concept. 
 * It is a way for objects to inherit properties and methods from other objects. 
 */

// Define an object 'persion1' with properties 'name', 'age', and 'village'
const persion1 = {
    name: 'sundram',
    age: '13',
    village: 'madhopur'
}

// Define another object 'persion2' with properties 'name' and 'age'
const persion2 = {
    name: 'Abhisheh',
    age: '21'
}

// Set the prototype of 'persion2' to be 'persion1'
persion2.__proto__ = persion1;

// Log the value of 'village' property on 'persion2'
console.log(persion2.village); 

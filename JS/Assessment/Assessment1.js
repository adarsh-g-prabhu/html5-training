// 1. Variable Declaration and Data Types
// Objective: Test basic understanding of variables and data types in JavaScript.
// Declare a variable to store your name as a string, age as a number, and a boolean value indicating whether you're a student or not.
// Print out the values of all the variables.
// Change the age value and reprint it.
// Check the type of each variable using typeof and print the result.

let Name = "Adarsh";
let age = 24;
let isStudent = false;


console.log("Name : "+Name);
console.log(`Age: ${age}`);
console.log("Is student ? ",isStudent);

Name="Abhishek";
age=18;
isStudent=true;
console.log("Name : "+Name);
console.log(`Age: ${age}`);
isStudent? console.log(`${Name} is student`) : console.log(`${Name} is not student`);

console.log("Type of Name Variable : " + typeof(Name));
console.log("Type of Age Variable : " + typeof(age));
console.log("Type of is_Student Variable : " + typeof(isStudent));
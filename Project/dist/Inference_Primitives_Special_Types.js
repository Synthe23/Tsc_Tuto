"use strict";
// Q1: What will be the inferred type of userName and isLoggedIn?
let userName = "Omm"; // String
let isLoggedIn = true; // boolean
// Can you later do this?
// userName = 100;
// isLoggedIn = "yes";
// No we can't do this as typescript alreday has assigned userName as a string and isLoggedIn as a boolean variable.
// Q2:
let age1 = 21;
age1 = 22;
age1 = 22.5;
console.log(age1);
// age1 = "23";
// Which assignments are valid and which are invalid?
// Solution: let age1: number = 21, age1 = 22, age1 = 22.5 is valid as the datatype of the age is number and also the value assigned is also a number. String age1 it is invalid.
// Q3:
// Predict the output type of message.
let name1 = "Omm";
let age2 = 21;
let message = `My name is ${name1} and I am ${age2} years old`;
console.log(message); // O/t: My name is Omm and I am 21 years old

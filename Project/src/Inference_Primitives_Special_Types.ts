// Q1: What will be the inferred type of userName and isLoggedIn?
let userName = "Omm"; // String
let isLoggedIn = true; // boolean

// Can you later do this?

// userName = 100;
// isLoggedIn = "yes";

// No we can't do this as typescript alreday has assigned userName as a string and isLoggedIn as a boolean variable.



// Q2:
let age1: number = 21;
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
console.log("name1 datatype: ",typeof name1, "\nage2 datatype: ", typeof age2);

// Solution:
// ts inferred string incase of name1 and integer in case of age2



// Q4:
// What happens here?
let value: any = 10;

value = "Hello";
value = true;
value = [1, 2, 3];
// 1: Will TypeScript show any errors?
// 2: Why can any be dangerous in large projects?

// Solution:
// 1: No, ts will not show any errors as type of value is any and it is a valid datatype in ts.
// 2: any, can be dangerous in large projects as any datatype variable can hold any kind of data that can be string number boolean etc and in large projects any is dangerous as a variable assigned with the any data-type can hold multiple valued when changed so its not safe.



// Q5: 
// What will happen here?

// let value1: unknown = "Hello";
// console.log(value1.toUpperCase());
// Will this compile?
// If not, how would you fix it properly?

// Solution:
// 1: No, this won't compile as it would produce an error
// 2: To fix it we would assign the dataype of the value 1 to string
//    i.e let value1: string = "Hello";
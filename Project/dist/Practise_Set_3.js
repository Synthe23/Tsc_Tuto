"use strict";
//TODO Topics covered in this file:
//  Q1–Q2 → Interfaces
//  Q3–Q4 → Tuples
//  Q5–Q6 → Enums
//  Q7–Q9 → Generics
//  Q10 → TypeScript’s type system reasoning
// interfaces, tuples, enums, generics, and classes
const user2 = {
    id: 1,
    name: "Omm",
    isAdmin: true
};
//? Questions:
// 1. Is this valid?
// 2. Will this work?
user2.id = 2;
const p1 = {
    id: 101,
    name: "Laptop"
};
// p.name = "Gaming Laptop";
// p1.id = 102;
//? Which line fails and why
//! Solution:
// The p1.id line will fail as in Product1 interface the id is a readonly key which means we cant redclare it outside a object like we did in p1.id = 102;
//! Q4:
//? What is the difference between:
let arr3 = ["Omm", 21];
// and
let tuple = ["Omm", 21];
//? Will these work
// tuple[0] = "Rahul";
// tuple[1] = 22;
// tuple[0] = 100;
// tuple.push(true);
//! Solution:
// tuple[0] = 100;
// tuple.push(true); 
// The above 2 lines wont work as the first element in the tuple shall be a string not a number and tuple.push(true) also wont work as the tuple only takes string and a number.
// The difference between arr3 and the tuple is. In the arr3 we can push any number of string or number datatypes only but in the tuple case we can only push string and numbers
//! Q5:
//? Which of these are valid
// let user_1: [number, string] = [1, "Omm"];
// let user_2: [number, string] = ["Omm", 1];
// let user_3: [number, string] = [1];
// let user_4: [number, string] = [1, "Omm", true];
//! Solution
// let user_1: [number, string] = [1, "Omm"]; // valid
// let user_2: [number, string] = ["Omm", 1]; // invalid
// let user_3: [number, string] = [1]; // invalid, as it requires 1 number, 1 string
// let user_4: [number, string] = [1, "Omm", true]; // invalid, as only 2 elements are required i.e a string, number only

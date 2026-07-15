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
    isAdmin: true,
};
//? Questions:
// 1. Is this valid?
// 2. Will this work?
user2.id = 2;
const p1 = {
    id: 101,
    name: "Laptop",
};
// p.name = "Gaming Laptop";
// p1.id = 102;
//? Which line fails and why
//! Solution:
// The p1.id line will fail as in Product1 interface the id is a readonly key which means the property can only be assigned during object creation.
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
// The difference between arr3 and the tuple is. In the arr3 we can push any number of string or number datatypes only but in the tuple case we can only push string and numbers in the extact format of first string then number
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
//! Q6:
// Given:
var Role1;
(function (Role1) {
    Role1[Role1["Admin"] = 0] = "Admin";
    Role1[Role1["User"] = 1] = "User";
    Role1[Role1["Guest"] = 2] = "Guest";
})(Role1 || (Role1 = {}));
//? What are the values of:
// Role1.Admin
// Role1.User
// Role1.Guest
//! Solution:
// The values of the Role1.Admin, Role1.User, Role1.Guest will be 1, 2, 3 respectively;
console.log(Role1.Admin); // o/t: 1
console.log(Role1.User); // o/t: 2
console.log(Role1.Guest); // o/t: 3
//! Q7:
// Predict the values:
var Status1;
(function (Status1) {
    Status1["Pending"] = "PENDING";
    Status1["Approved"] = "APPROVED";
    Status1["Rejected"] = "REJECTED";
})(Status1 || (Status1 = {}));
//? What gets printed
console.log(Status1.Pending);
console.log(Status1.Approved);
//? Why might string enums be preferred in APIs?
//! Solution:
// These two lines will print:
// console.log(Status1.Pending); // PENDING
// console.log(Status1.Approved); // APPROVED
// String enums are preffered in the apis because:
// {
//     "status": "APPROVED"
// } 
// is much easier to understand than 
// {
// "status": 1
// }
// So, we can say that string enums are self documenting.
//! Q8:
//! What does <T> represent
function identity(value) {
    return value;
}
//? What are the return types of:
identity(10);
identity("hello");
identity(true);
//! Solution:
// identity(10) will return number, identity("hello") will return string, identity(true) will return boolean
// console.log(typeof identity(10));
//! Q9:
//? What is the difference between:
let numbers1 = [1, 2, 3];
// and
let numbers2 = [1, 2, 3];
// Are they equivalent
//! Solution:
// Yes, They are both equivalent. One directly declared the number[] and the other declared the Array of the type of the numbers.
//! Q10:
// Given
class Student1 {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    introduce() {
        console.log(`Hi, I am ${this.name}`);
    }
}
;
//? When would you choose one over the other?
//! Solution:
// Difference between interface and types are:
//* Interface
// Best for object shapes
// Supports declaration merging
// Common for OOP and classes
//* Types
// Can represent anything
// doesn't support declaration merging
// Common for unions and advanced types
// Eg:
// type Status = "pending" | "approved" | "rejected"; 
// interfaces cant do the above line but types can.

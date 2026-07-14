//TODO Topics covered in this file:
//  Q1–Q2 → Interfaces
//  Q3–Q4 → Tuples
//  Q5–Q6 → Enums
//  Q7–Q9 → Generics
//  Q10 → TypeScript’s type system reasoning
// interfaces, tuples, enums, generics, and classes


//! Q1:
interface User1 {
    id: number;
    name: string;
    isAdmin: boolean;
}

const user2: User1 = {
    id: 1,
    name: "Omm",
    isAdmin: true
};
//? Questions:
// 1. Is this valid?
// 2. Will this work?
user2.id = 2;
// user.email = "omm@gmail.com";
//? Why?

//! Solution:
// i> Yes, it is valid 
// ii> Yes, user.id = 2 will work perfectly but user.email wont work as it is not presetn in the User1 interface.
// console.log(user2);



//! Q2:
//? What does this mean?
interface Employee {
    id: number;
    name: string;
    department?: string;
}
//? Which objects are valid?
// const e1: Employee = {
//     id: 1,
//     name: "Omm"
// };

// const e2: Employee = {
//     id: 2,
//     name: "Rahul",
//     department: "Engineering"
// };

// const e3: Employee = {
//     id: 3,
//     department: "HR"
// };

//! Solution:
// const e1: Employee = {
//     id: 1,
//     name: "Omm"
// };

// const e2: Employee = {
//     id: 2,
//     name: "Rahul",
//     department: "Engineering"
// };
// The above 2 objects are valid as the department key is a optional ans every key can or can't have it but the other two keys are must required.



//! Q3:
//? Predict what happens:
interface Product1 {
    readonly id: number;
    name: string;
}

const p1: Product1 = {
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
let arr3: (string | number)[] = ["Omm", 21];
// and
let tuple: [string, number] = ["Omm", 21];
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
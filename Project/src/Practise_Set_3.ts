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
  isAdmin: true,
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
  name: "Laptop",
};

// p.name = "Gaming Laptop";
// p1.id = 102;
//? Which line fails and why

//! Solution:
// The p1.id line will fail as in Product1 interface the id is a readonly key which means the property can only be assigned during object creation.

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
enum Role1 {
  Admin,
  User,
  Guest,
}
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
enum Status1 {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED",
}
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
function identity<T>(value: T): T {
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
let numbers1: number[] = [1, 2, 3];
// and
let numbers2: Array<number> = [1, 2, 3];
// Are they equivalent

//! Solution:
// Yes, They are both equivalent. One directly declared the number[] and the other declared the Array of the type of the numbers.

//! Q10:
// Given
class Student1 {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}`);
  }
}
// Questions:
// 1. How do you create an object of this class?
// 2. How do you call introduce()?
// 3. What is the purpose of this?

//! Solution:
// i> We can create the object of the class Student by this syntax:
// const student = new Student1(3, "Omm"); 
//* OR
// let student = new Student(3, "Omm"); 
// ii> To call the introduce method we will do:
// student.introduce();
// iii> This is used to get the current object instance as in the introduce() ${this.name} means "Omm"




//! Q11:
// What is the difference between:
interface User1 {
    name: string;
};
// and 
type User2 = {
    name: string
}
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

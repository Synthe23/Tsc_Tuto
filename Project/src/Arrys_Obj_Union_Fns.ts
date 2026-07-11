// ! Topics covered in this file:
//  Q1–Q2 → Arrays
//  Q3–Q4 → Objects
//  Q5–Q6 → Union Types
//  Q7–Q9 → Functions
//  Q10 → TypeScript’s type system reasoning

// ! Q1: 
// ? i>  What is the inferred type of numbers and names?
let numbers = [1, 2, 3, 4];
let names = ["Omm", "Rahul", "Amit"];

// ? ii> Can you later do this?
numbers.push(5);
// numbers.push("six");

names.push("Priya");
// names.push(10);
// Explain why?

// ! Solution:
// i> Inferrred type of the numbers is a number [] and inferred type of the names is a string [].
// ii> Yes we can push 5 into numbers but can't push "six" as it is an number[]. Yes, we can push "priya" into names but cant push 10 as it is an string[].
// console.log(numbers);
// console.log(names);



// ! Q2:
// ? Which lines are valid and which are invalid?
let scores1: number[] = [10, 20, 30];
scores1.push(40);
scores1.push(50.5);
// scores1.push("60");
scores1[0] = 100;
// scores1[1] = false;

// ! Solution:
// scores1.push(40);
// scores1.push(50.5);
// scores1[0] = 100;
// The above 3 lines are valid as they are numbers even thought one is double data type but ts treats them as only number catagory. 
// scores1.push(60), scores1[1] = false is invalid as they are string and a boolean and scores is an numbers[] so we can't change the scores array.
// console.log(scores1);



// ! Q3:
// ? What type does TypeScript infer for user1?
let user1 = {
    name: "Omm",
    age: 21,
    isAdmin: false
};
// ? Will these work?
user1.age = 22;
user1.name = "Rohan";
user1.isAdmin = true;

// user1.age = "twenty two";
// user1.email = "test@gmail.com";
// ? Why or why not

// ! Solution
// i>
// user1.age = 22;
// user1.name = "Rohan";
// user1.isAdmin = true; 
// These 3 lines above will work normally but 

// user1.age = "twenty two";
// user1.email = "test@gmail.com"; 
// Will not work as user1.email is not present in the user object and user1.age takes a number not a string.



// ! Q4:
// ? Which lines are valid?
let employee: {
    id: number;
    name: string;
    salary: number;
} = {
    id: 1,
    name: "Omm",
    salary: 50000
};

employee.salary = 60000;
employee.name = "Rahul";
// employee.id = "2";
// employee.department = "Engineering";

// ! Solution
// employee.id = "2";
// employee.department = "Engineering"; 
// The above two lines are invalid as employee.id only takes number and employee.department doesn't exist.
// console.log(employee);



// 




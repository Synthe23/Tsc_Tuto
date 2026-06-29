"use strict";
// Unions - A union in TypeScript is a type that allows a value to be one of several different types, represented using the pipe (|) symbol (e.g., string | number).
// 1>
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toLowerCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}
function describeUser(u) {
    if (u.role === "Admin") {
        console.log(u.permissions);
    }
    else {
        console.log(u.loyalityPoints);
    }
}
function describeUserWithInOperator(u) {
    if ("permissions" in u) {
        console.log(u.role, "Admin User");
    }
    else {
        console.log(u.loyalityPoints);
    }
}
// Array of the unions and the union of the arrays
const arrOfUnions = ["a", 1, "b", 2];
const unionOfArrays = Math.random() > 0.1 ? ["x", "3"] : [1, 2];
// unionOfArrays.push("5"); // this is a error

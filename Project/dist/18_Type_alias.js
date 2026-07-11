"use strict";
// object shapes -> similar to interfaces
// union types (A | B)
// intersection types (A & B)
const person1 = {
    id: "101",
    address: "Kolkata",
    salary: 43000,
};
function nextActionCheck(s) {
    switch (s) {
        case "new":
            return "paid";
        case "paid":
            return "pending";
        case "pending":
            return "completed";
    }
}

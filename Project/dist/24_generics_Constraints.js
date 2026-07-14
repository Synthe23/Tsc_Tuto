"use strict";
// <T> -> constraint T so that only certain shapes are allowed.
// <T> extends X>
// key constraints -> <K extends key of T> -> K must be a ket of T
//! 1:
function lenN4(xN4) {
    return xN4.length;
}
console.log(lenN4("Hello"));
console.log(lenN4([1, 2, 3, 4, 5, 6]));
console.log(lenN4({ length: 10, tag: "ok" }));
function UserN6Extract(arrN4, keyN4) {
    return arrN4.map((item) => item[keyN4]);
}
const userN6 = [
    {
        id: "1",
        name: "name1",
        age: 22,
    },
    {
        id: "2",
        name: "name2",
    },
];
console.log(UserN6Extract(userN6, 'id'));
console.log(UserN6Extract, 'age');

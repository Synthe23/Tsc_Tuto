"use strict";
// 1>
let username = "synthe";
let age = 23;
let isCreator = true;
console.log(username.toUpperCase());
// 2> 
const bigInt = 2n ** 63n - 1n;
// if we assign '+' operator to datatype bigint and number it gives us error
// 3>
const TOKEN = Symbol('TOKEN');
// 4>
function yearsToDays(years) {
    return years * 365;
}
console.log("Years to days conversion result: ", yearsToDays(3));

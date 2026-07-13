"use strict";
function describeTypeOf(x) {
    if (typeof x === "string") {
        return "string";
    }
    if (typeof x === "number") {
        return "number";
    }
    if (typeof x === "boolean") {
        return "boolean";
    }
    if (typeof x === "bigint") {
        return "bigint";
    }
    if (typeof x == "symbol") {
        return "symbol";
    }
    if (typeof x === "undefined") {
        return "undefined";
    }
    if (typeof x === "function") {
        return "fucntion";
    }
    if (typeof x === null) {
        return "null";
    }
    return "object";
}
console.log(describeTypeOf("hi"), describeTypeOf(23), describeTypeOf(true), describeTypeOf(10n), describeTypeOf(Symbol("synthe")), describeTypeOf(undefined), describeTypeOf(() => { }), describeTypeOf(null), describeTypeOf({}));
function info(z) {
    if (Array.isArray(z)) {
        return z;
    }
    if (z instanceof Date) {
        return new Date();
    }
    if (z instanceof Error) {
        return new Error("error!");
    }
}
console.log(info([1, 2, 3, 4, 5]), info(new Date()), info(new Error("oops! Error occured while fetching data!")), info({ x: 1 }));

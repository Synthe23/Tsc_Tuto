"use strict";
let title = "ts_tutorial";
// title = undefined // this will show an error if the strict mode in tsconfig.json is true else it will show no error
// but if we want something which can be a string or a undefined then we shall write:
let subtitle = "omm"; // this is completely valid !
// void: fucntion doesn't return a useful value
function log(msg) {
    console.log(msg);
}
// never: it never returns
function fail(msg) {
    throw new Error(msg);
}
// Important: Do not use 'any' data-type try to ignore as much as possible
const valueAny = JSON.parse('{"x":3}');
valueAny.notThere.toFixed(2); // this can break at runtime as we are using any data-type 
// use void or never in place or any

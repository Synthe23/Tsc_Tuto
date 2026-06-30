"use strict";
function func1(a, b) {
    return a + b;
}
const num2 = [1, 2, 3, 4, 5];
const doubled = num2.map(n => n * 2);
console.log(doubled);
// const arr2 = (n) => num2 * 2; // always prefer to give annotations as it gives errors
// FIX:
const arr = (n) => n * 2;
function distanceFromOrigin(p) {
    return Math.hypot(p.x, p.y);
}
console.log(distanceFromOrigin({ x: 3, y: 5 }).toFixed(3));

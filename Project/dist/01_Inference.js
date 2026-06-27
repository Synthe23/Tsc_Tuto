// goal -> unstand when to let the Typescript infer types
// 1>
let count = 0; // ts sees it as a number
const site = "ilia_topuria"; // ts sees the exact literal "ilia_topuria"
const scores = [10, 20, 30]; // ts sees it as a number array
// 2>
export function add(a, b) {
    return a + b;
}
console.log(add(5, 2));
// 3>
// We should also annotate the data type when the type is not obvious!
// Eg:
let maybe;
maybe = Math.random() > 0.5 ? "test" : 23;

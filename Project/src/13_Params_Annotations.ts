function func1(a: number, b: number): number{
    return a + b;
}

const num2 = [1, 2, 3, 4, 5];
const doubled = num2.map(n => n * 2);
console.log(doubled);

// const arr2 = (n) => num2 * 2; // always prefer to give annotations as it gives errors
// FIX:
const arr = (n: number) => n * 2;

type Point = {x: number, y: number}
function distanceFromOrigin(p: Point): number{
    return Math.hypot(p.x, p.y);
}

console.log(distanceFromOrigin({x: 3, y: 5}).toFixed(3));
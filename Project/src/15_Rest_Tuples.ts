// 1>
function makeRange(start: number, end: number, step: number = 1): number[] {
  const out: number[] = [];

  for (let n = start; n <= end; n += step) {
    out.push(n);
  }

  return out;
}

console.log(makeRange(1, 5));
console.log(makeRange(2, 10, 2));


// 2>
function draw(x: number, y: number){
    console.log(x, y);
}

const points = [10, 20];
// draw(...points); // this will give error as a spread argument must either have a tuple type or be passed to a rest parameter.
// FIX:
const fixedPoints = [10, 20] as const;
draw(...fixedPoints); // this is valid and doesn't return an error as it's readonly
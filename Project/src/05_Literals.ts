type Direction = "left" | "right" | "up";

function move(d: Direction) {
  console.log(d);
}

const d1 = "left"; // as const will remain same throughout prog so it will not raise errors
move(d1);

// let d2 = "left";
// move(d2); // this will raise error as thr value of lrt may change anytime in the prog!
// ☝🏻 issue fix
let d3: Direction = "left";
move(d3);

const a11: number[] = [1, 2, 3]; // T[]
const a22: Array<number> = [1, 2, 3]; // Array<T>

const scores = [10, 20, 30];
// scores.push('20') // can't push strings as it a array of inference

const mix: (string | number)[] = [1, "2", 3, "4"];

// write a fucntion to take a array as input and return the number from the array
function nums(arr: (number | string)[]): void {
  arr.forEach((item) => {
    if (typeof item === "number") {
      console.log("Number: ", item);
    } else {
      console.log("String: ", item);
    }
  });
}

nums([1, "2", 3, "4", 5, "6"]);

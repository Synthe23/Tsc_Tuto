const arr1: readonly number[] = [1, 2, 3, 4, 5]; // read-only array type 1
const arr2: ReadonlyArray<number> = [1, 2, 3, 4, 5]; // this line and the abv line are same

const xss = [1, 23, 31];
xss.push(9);
console.log(xss); // this will work o/t - [ 1, 23, 31, 9 ]
console.log(arr2.concat(2)); // push not available here as it's readonly array

// 1>
function sum(nums: readonly number[]): number{
    let sum = 0;
    for(const n of nums){
        sum += n;
    }
    return sum;
}
console.log(sum(xss)); // passing the read-only array in the mutuable param is allowed


// 1>
let username: string = "synthe";
let age: number = 23;
let isCreator: boolean = true;
console.log(username.toUpperCase());

// 2> 
const bigInt: bigint = 2n ** 63n - 1n;
// if we assign '+' operator to datatype bigint and number it gives us error

// 3>
const TOKEN: unique symbol = Symbol('TOKEN');

// 4>
function yearsToDays(years: number) : number{
    return years * 365;
}
console.log("Years to days conversion result: " , yearsToDays(3));



// understand what is type-parameter <T> is
// how ts infers <T> from your arguments automatically
// Generics is a function where the types are blanks that you fill it later.
// <T> is a placeholder
// TS will try to understand what <T> should be

function id<T>(x: T): T {
  return x;
}

// infers T
// id(5) -> T is a number
// id('string') -> T is a string
// id <number>(5)

const xyzz = id(5);
console.log(xyzz + 1); // o/t is 6
console.log(xyzz + 1, id("Syn_23")); // o/t is 6 Syn_23
console.log(xyzz + 1, id(["Syn_31"])); // o/t is 6 [ 'Syn_31' ]

function firstGen<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(firstGen([1, 2, 3])); // o/t - 1

// Without generics -> (x: unknown) => unknown
// with generics: (x: T) => T // keep the exact type

function wrap<T>(value: T): { value: T } {
    return {value}
}

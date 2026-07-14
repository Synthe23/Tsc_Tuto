// <T> -> constraint T so that only certain shapes are allowed.
// <T> extends X>
// key constraints -> <K extends key of T> -> K must be a ket of T

//! 1:
function lenN4<T extends { length: number }>(xN4: T): number {
  return xN4.length;
}

console.log(lenN4("Hello"));
console.log(lenN4([1, 2, 3, 4, 5, 6]));
console.log(lenN4({ length: 10, tag: "ok" }));
// console.log(lenN4(123)); // Invalid as Argument of type 'number' is not assignable to parameter of type '{ length: number; }'

//! 2:
type UserN6 = { id: string; name: string; age?: number };
function UserN6Extract<T, K extends keyof T>(
  arrN4: T[],
  keyN4: K
): Array<T[K]> {
  return arrN4.map((item) => item[keyN4]);
}

const userN6: UserN6[] = [
  {
    id: "1",
    name: "name1",
    age: 22,
  },
  {
    id: "2",
    name: "name2",
  },
];
console.log(UserN6Extract(userN6, 'id'));
console.log(UserN6Extract, 'age');
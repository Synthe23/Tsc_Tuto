// Definition - Intersection types in TypeScript combine multiple existing types into a single, unified type.

type name = { name: string };
type age = { age: number };

type Person = name & age;

const user: Person = {
  name: "Omm",
  age: 23,
}; // Must have the both name and age properties

// Question 1 - Create a intersection called Account which shall have name, email, age, mobile
type Name = { name: string };
type Email = { email: string };
type Age = { age: number };
type Mobile = { mobile: number };

type Account = Name & Email & Age & Mobile;

const a: Account = {
  name: "Omm",
  email: "mishraomm5001@gmail.com",
  age: 23,
  mobile: 9778612358,
};

// Intersction doesn't merge conficting entity types

// Similarly we can merge two intersections
type Product = { id: string; title: string };
type Price = { price: number };

type ProductPrice = Product & Price;
const p: ProductPrice = {
  id: "ut1",
  title: "It is a greek-yoghurt",
  price: 290,
};

// object shapes -> similar to interfaces
// union types (A | B)
// intersection types (A & B)

type Person1 = {
  id: string;
  address: string;
  salary: number;
};

const person1: Person1 = {
  id: "101",
  address: "Kolkata",
  salary: 43000,
};

type Status = "new" | "paid" | "pending";

function nextActionCheck(s: Status): string {
  switch (s) {
    case "new":
      return "paid";

    case "paid":
      return "pending";

    case "pending":
      return "completed";
  }
}

type toMerge1 = {price: number}
type toMerge2 = {price: number}
type mergeProductInfo = Person1 & toMerge1 & toMerge2

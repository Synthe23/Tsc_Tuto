// 1>
// email? : string means the email may be absent but if the email is present then it is a string!
// it is not same as email: string | undefined
type User = {
  id: string; // required
  name: string;
  email?: string;
  readonly createdAt: Date; // can't be reassigned
};

// 2>
const User1: User = {
  id: "u1",
  name: "omm",
  createdAt: new Date(),
};

// 3>
const User2: User = {
  id: "u2",
  name: "syn",
  createdAt: new Date(),
  email: "email@gmail.com",
};
console.log((User1.id = "id3"));

// 4>
type user2 = { email?: string }; // it may be absent or can only be string
type user3 = { email: string | undefined }; // it may be string or undefined but never absent

// 5>
type count = { [k: string]: number };
type count1 = Record<"likes" | "views" | "subscribe", number>; // it means we can only choose between those 3 values

const c1: count = { whatever: 3 };
const c2: count1 = { likes: 1, views: 2, subscribe: 23 };

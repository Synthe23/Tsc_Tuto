type inExample1 = { role: "Admin"; permissions: string[] };
type inExample2 = { role: "User"; expiresAt: Date };
type UserExample = inExample1 | inExample2;

function describeUserExample(u: UserExample) {
  if ("permissions" in u) {
    return `Admin ${u.permissions.join(",")}`;
  }
  return `User ${u.expiresAt.toISOString()}`;
}
console.log(describeUserExample({ role: "Admin", permissions: ["read"] }));

// To avoid the runtime crashes
// ?? and || 
// obj?.a
type profileN3 = {
    name : string;
    contact? : {email? : string}
}

const P1N3: profileN3 = {name: 'John'}
const P2N3: profileN3 = {name: 'Ben', contact: {email: 'ben@gmail.com'}}

const email1N3 = P1N3.contact?.email
const email2N3 = P2N3.contact?.email

// ?? -> uses the right hand default only when the left hand is null or undefined
// || -> uses the default when  the left is any falsy value (0, "", null, undefined, NaN)

const countFromServerN3: number | null = 0;
const labelFromServerN3: String | undefined = ""

const aN3 = countFromServerN3 ?? 100 // keeps the 0
const bN3 = countFromServerN3 || 100
console.log(aN3, bN3); // o/t - 0

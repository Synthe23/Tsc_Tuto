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

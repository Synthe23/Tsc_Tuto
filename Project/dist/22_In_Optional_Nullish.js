"use strict";
function describeUserExample(u) {
    if ("permissions" in u) {
        return `Admin ${u.permissions.join(",")}`;
    }
    return `User ${u.expiresAt.toISOString()}`;
}
console.log(describeUserExample({ role: "Admin", permissions: ["read"] }));
const P1N3 = { name: 'John' };
const P2N3 = { name: 'Ben', contact: { email: 'ben@gmail.com' } };
const email1N3 = P1N3.contact?.email;

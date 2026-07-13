"use strict";
function describeUserExample(u) {
    if ("permissions" in u) {
        return `Admin ${u.permissions.join(",")}`;
    }
    return `User ${u.expiresAt.toISOString()}`;
}
console.log(describeUserExample({ role: "Admin", permissions: ["read"] }));

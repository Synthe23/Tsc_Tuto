"use strict";
// Interface - An interface in TypeScript is a virtual contract that defines the exact structural shape an object, class, or function must follow. They exist solely for compile-time type-checking and are completely removed when compiled into JavaScript, leaving zero runtime overhead.
const user333 = {
    id: 1,
    name: "Omm",
    email: "mishraomm5000@gmail.com",
    createdAt: new Date(),
};
// Admin333 will inherit all the properties of the User333 along with the new properties
const admin333 = {
    id: 2,
    name: "Synthe",
    email: "mishraomm5001@gmail.com",
    createdAt: new Date(),
    permissions: ["Read", "Write", "Read-Write"],
};
const adminwithmeta = {
    id: 2,
    name: "Synthe",
    email: "mishraomm5001@gmail.com",
    createdAt: new Date(),
    permissions: ["Read", "Write", "Read-Write"],
    meta: {
        active: true,
    },
};

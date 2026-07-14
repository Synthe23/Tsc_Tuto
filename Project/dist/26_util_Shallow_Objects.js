"use strict";
// partial <T> -> make all the top level fields optional
const patch10 = { name: "Omm" };
const patch11 = { address: { line1: "line1", city: "BBSR" } };
const userAllPatch11 = {
    id: "u2",
    name: "Omm",
    address: { line1: "l-1", city: "c2" },
    email: "test@gmail.com",
};
const readOnlyUser = {
    id: "u3",
    name: "name",
    address: {
        line1: "line3",
        city: "city3",
    },
};
const publicUser = { id: "u5", name: "Omm123" };
const omitUserN10 = {
    id: "u2",
    name: "Synthe_23",
    address: { line1: "line2", city: "C2" },
};
const dirN10 = {
    admin: { id: "u10", name: "admin", address: { line1: "l1", city: "c1" } },
    user: { id: "u11", name: "user", address: { line1: "l2", city: "c2" } },
    editor: { id: "u12", name: "editor", address: { line1: "l3", city: "c3" } },
};

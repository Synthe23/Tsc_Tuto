"use strict";
// 👇🏻 is a array of string in read-only form
const ROLES = ["admin", "user", "operator"];
function setRole(r) {
    console.log(r);
}
setRole('admin'); // if we try to chnge this other vals than the above 3 vals it gives error

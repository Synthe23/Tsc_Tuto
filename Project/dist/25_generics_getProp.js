"use strict";
function getUserPropN7(objN7, keyN7) {
    return objN7[keyN7];
}
const uN7 = {
    id: "u1",
    name: "Omm",
};
const idValN7 = getUserPropN7(uN7, "phone");
//* Set user prop
function setUserPropN7(objN7, keyN7, newVal) {
    objN7[keyN7] = newVal;
}
setUserPropN7(uN7, 'name', 'John');
setUserPropN7(uN7, 'phone', 23);

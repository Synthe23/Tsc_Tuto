"use strict";
// ReturnType<F>
// Parameters<F>
// InstanceType<Ctor>
// ConstructorParameters<C>
function ExtractUserInfo(id, isExtractInfo = false) {
    return {
        id,
        name: "Omm",
        log: isExtractInfo ? "Details" : undefined,
    };
}
const argsInfo = ["u1", true];
const resultInfo = ExtractUserInfo(...argsInfo);
class PersonN1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi I am ${this.name}`;
    }
}
const resultInfo1 = ["Omm", 23];
const abc = new PersonN1(...resultInfo1);
console.log(abc.greet());

"use strict";
// ReturnType<F>
// Parameters<F>
// InstanceType<Ctor>
//ConstructorParameters<C>
function ExtractUserInfo(id, isExtractInfo = false) {
    return {
        id,
        name: "Omm",
        log: isExtractInfo ? "Details" : undefined,
    };
}
const argsInfo = ["u1", true];
const resultInfo = ExtractUserInfo(...argsInfo);

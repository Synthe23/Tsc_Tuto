// 1>
// Inference example
const doubleFunction = (n) => n * 2;
// 2>
// explicit return for the exported/public functions
export function WebTransportBidirectionalStream(s) {
    return `Hello ${s}`;
}
// 3>
function returnBool(flag) {
    if (flag) {
        return 1;
    }
    else {
        return 0;
    }
}
console.log(returnBool(true));
// 4>
async function loadCountInferred() {
    return 23;
}
loadCountInferred().then((e) => console.log());

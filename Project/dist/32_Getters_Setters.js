"use strict";
//TODO Get and the set uses:
class Temperature {
    #c = 0;
    constructor(celsius) {
        this.celsius = celsius;
    }
    get celsius() {
        return this.#c;
    }
    set celsius(value) {
        if (Number.isNaN(value)) {
            throw new Error("Please privde the value correctly!");
        }
        this.#c = value;
    }
    get fahrenheit() {
        return (this.#c * 9) / 5 + 32;
    }
    set fahrenheit(f) {
        this.celsius = ((f - 32) * 5) / 9;
    }
}
const temp1 = new Temperature(38);
temp1.fahrenheit = 212;

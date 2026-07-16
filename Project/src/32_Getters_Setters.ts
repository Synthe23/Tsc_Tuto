//TODO Get and the set uses:

class Temperature {
  #c = 0;

  constructor(celsius: number) {
    this.celsius = celsius;
  }

  get celsius(): number {
    return this.#c;
  }

  set celsius(value: number) {
    if (Number.isNaN(value)) {
      throw new Error("Please privde the value correctly!");
    }
    this.#c = value;
  }

  get fahrenheit(): number {
    return (this.#c * 9) / 5 + 32;
  }

  set fahrenheit(f: number) {
    this.celsius = ((f - 32) * 5) / 9;
  }
}

const temp1 = new Temperature(38);
temp1.fahrenheit = 212;

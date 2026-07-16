// In this file we will be coverig the typescript access modifiers such as the public, private, protected access modeifiers.

//! i>
class BankAccount {
  public owner: string;
  private balance = 0;
  #otp = 123456; // this will also be considered as a private variable

  constructor(owner: string) {
    this.owner = owner;
  }

  deposit(amt: number) {
    if (amt <= 0) {
      throw new Error("Amout must be greater than 1!");
    }
    this.balance += amt;
  }
  getBalance() {
    return this.balance;
  }
  verifyOTP(code: number) {
    return this.#otp === code; // this is only accessable inside the class
  }
}

const acc1 = new BankAccount("Omm");
acc1.deposit(1250);
console.log("Current Holding amount: ", acc1.getBalance());

//! ii>
// Protected variable will be availbale to only its own class and the subclasses.
class Animal {
  protected energy = 23;

  eat(amount: number) {
    this.energy = Math.min(100, this.energy + amount);
  }
}

class Dog extends Animal {
  run() {
    this.energy -= 10;
  }
  status() {
    return this.energy;
  }
}
const dog = new Dog();
dog.eat(10);
dog.run();
dog.status();
// dog.energy(); // invalid as energy is protected variable

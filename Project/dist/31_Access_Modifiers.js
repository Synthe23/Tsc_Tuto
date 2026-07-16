"use strict";
// In this file we will be coverig the typescript access modifiers such as the public, private, protected access modeifiers.
class BankAccount {
    owner;
    balance = 0;
    #otp = 123456; // this will also be considered as a private variable
    constructor(owner) {
        this.owner = owner;
    }
    deposit(amt) {
        if (amt <= 0) {
            throw new Error("Amout must be greater than 1!");
        }
        this.balance += amt;
    }
    getBalance() {
        return this.balance;
    }
    verifyOTP(code) {
        return this.#otp === code; // this is only accessable inside the class
    }
}
const acc1 = new BankAccount("Omm");
acc1.deposit(1250);
console.log("Current Holding amount: ", acc1.getBalance());

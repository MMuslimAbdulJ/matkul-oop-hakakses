"use strict";
class PersonProtected {
    constructor(address = "") {
        this.address = "Unknown";
        this.address = address;
    }
    get getAddress() {
        return this.address;
    }
}
const personProtected = new PersonProtected("Cianjur");
console.log(personProtected.address); //error
console.log(personProtected.getAddress);

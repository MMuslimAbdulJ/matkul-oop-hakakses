"use strict";
class PersonPrivate {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }
}
const personPrivate = new PersonPrivate("Muslim", 17);
console.log(personPrivate.name); //error
console.log(personPrivate.getName);
console.log(personPrivate.getAge);

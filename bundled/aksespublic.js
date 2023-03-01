"use strict";
class PersonPublic {
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
    sayHello() {
        console.log(`Hello nama saya ${this.name} dan saya ${this.age} tahun.`);
    }
}
const personPublic = new PersonPublic("Muslim", 17);
// console.log(personPublic.name); //error
console.log(personPublic.getName);
console.log(personPublic.getAge);
personPublic.sayHello();

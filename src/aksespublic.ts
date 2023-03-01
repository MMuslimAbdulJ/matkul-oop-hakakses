class PersonPublic {

  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get getName(): string {
    return this.name;
  }

  get getAge(): number {
    return this.age;
  }

  sayHello() {
    console.log(`Hello nama saya ${this.name} dan saya ${this.age} tahun.`)
  }

}

const personPublic = new PersonPublic("Muslim", 17);
// console.log(personPublic.name); //error
console.log(personPublic.getName);
console.log(personPublic.getAge);
personPublic.sayHello();
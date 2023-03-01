class PersonProtected {
  protected address: string = "Unknown";

  constructor(address: string = "") {
    this.address = address;
  }

  get getAddress(): string {
    return this.address;
  }
}

const personProtected = new PersonProtected("Cianjur");
console.log(personProtected.address); //error
console.log(personProtected.getAddress);

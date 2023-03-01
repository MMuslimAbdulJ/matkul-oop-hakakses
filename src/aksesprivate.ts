class PersonPrivate {

    private name : string;
    private age : number;
    
    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }
    
    get getName() : string {
        return this.name;
    }
    
    get getAge() : number {
        return this.age;
    }

}

const personPrivate = new PersonPrivate("Muslim", 17);
console.log(personPrivate.name); //error
console.log(personPrivate.getName)
console.log(personPrivate.getAge)
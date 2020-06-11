// import Person  from "./Person";

// import { Person } from "./Person";


class Person {
    constructor(id, name, age) {
        this.id = id || null;
        this.name = name || null;
        this.age = age || null;
    }
}


const person = new Person(); 
person.id = 1;
person.name = 'Thanawat';
person.age = 25;

console.log(person)

class Female extends Person {

}

const female = new Female();

console.log(female)
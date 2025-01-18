"use strict";

let shape1 = {
    area: 40
};
let shape2 = {
    area: 21
};
let shapes = [shape1, shape2];

let filteredShapes = shapes.filter((shape) => {
    return shape.area > 20;
});
console.log(filteredShapes);

class Person {
    name = String();
    age = Number();
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    static getName() {
        return this.name;
    };
    getAge() {
        return this.age;
    };
};

console.log(Person.getName('Frank', 65));
let person1 = new Person('Frank', 65);

class Developer extends Person {
    constructor(programmingLanguage) {
        super();
        this.programmingLanguage = programmingLanguage;
    };
};
let developer1 = new Developer('Python');
console.log(developer1.programmingLanguage);
console.log(Developer.prototype);
console.log(Developer.prototype.constructor);
developer1.age = 24;
console.log(developer1.age);
developer1.hobbit = 'play videogames';
console.log(developer1.hobbit);
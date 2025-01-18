"use strict";

// Practice task (Animals project). You can use console application
// Classes, methods, constructors, overriding, access modifiers and inheritance practice:
// Base Animal class:
// Create class Animal with fields age, weight. Age and weight must be parameters of Animal 
// constructor. In Animal class implement EatFood() method that writes in console message 
// "Animal is eating food". And also implement PrintInfo() method that writes in console 
// "My age is {age}, my weight is {weight}".
class Animal {
    age;
    weight;
    constructor(age, weight) {
        this.age = age;
        this.weight = weight;
    };
    eatFood() {
        console.log("Animal is eating food");
    };
    printInfo() {
        console.log(`My age is ${this.age}, my weight is ${this.weight}`);
    };
};

// Create child classes of Animal class: Monkey and Donkey. 
// *(Pay attention to the constructor to solve any errors).
// Monkey class:
// Monkey class should have additional string field - FoodType, you must get value of it from constructor. 
// In your Monkey class override EatFood() method. It should write "This monkey loves {FoodType}".
class Monkey extends Animal {
    foodType;
    constructor(age, weight, foodType) {
        super(age, weight);
        this.foodType = foodType;
    };
    eatFood() {
        console.log(`This monkey loves ${this.foodType}`);
    };
};

// Donkey class:
// Donkey class should have additional string field - Name, you must get name from 
// constructor. In this class override PrintInfo() method. The method should print 
// "Donkey with name {name}: age {age}, weight {weight}".
class Donkey extends Animal {
    name;
    constructor(age, weight, name) {
        super(age, weight);
        this.name = name;
    };
    printInfo() {
        console.log(`Donkey with name: ${this.name}, age: ${this.age}, weight: ${this.weight}`);
    };
};

// Loops (for/each, while), Collections, static, lambda filtering.
// Zoo class:
// Zoo class must have string city field and also field List of Animal type. 
// It should take animals list and city as arguments of constructor.
// In this class implement PrintAnimals() method that calls PrintInfo() method 
// for each element in animals list (Use for or foreach loop). 
// Before loop iteration you can add console line "In {_city} zoo we have animals:".
// Also implement FeedAnimals() method that calls EatFood() method for each animal 
// in list. Use while loop. Before loop add line to console 
// "Let's feed animals in {_city} Zoo!".
// Also implement GetCity method that returns value of City field.
class Zoo {
    city = String();
    animalTypes = [];
    constructor(city, animalTypes) {
        this.city = city;
        this.animalTypes = animalTypes;
    };
    printAnimals() {
        console.log(`In ${this.city} we have animals: `);
        this.animalTypes.forEach((animalType) => {
            animalType.printInfo();
        });
    };
    feedAnimals() {
        console.log(`Let's feed animals in ${this.city} Zoo!`);
        let count = 0;
        while (count < this.animalTypes.length) {
            this.animalTypes[count].eatFood();
            count ++;
        };
    };
    getCity() {
        return this.city;
    };
};
let monkey1 = new Monkey(7, 82, 'Apples');
let donkey1 = new Donkey(5, 99, 'Justino');

let zoo1 = new Zoo('Texas', [monkey1, donkey1]);
zoo1.printAnimals();
zoo1.feedAnimals();
console.log(zoo1.getCity());

// AnimalsFilter class:
// This filter class should be able to filter your collection of animals 
// (sort it, pick animals by specific paramters).
// Create static method that returns filtered list of animals 
// FilterByAge(takes list of animals as parameter, takes MinAge as second parameter). 
// Inside this method use lambda expression to return only elements of collection 
// whose age is greater than MinAge.
class AnimalsFilter {
    static filterByAge(animalsList, minAge) {
        let filteredAnimalsList = animalsList.animalTypes.filter((animalType) => {
            return animalType.age > minAge;
        });
        return filteredAnimalsList;
    };
};
let firstFilter = AnimalsFilter.filterByAge(zoo1, 3);
console.log(firstFilter);
// Polymorphism (up/down casting), objects of class, collections methods, debug mode.
// In your Main method:
// Create empty list of animals. Add to the list:
let zoo2 = new Zoo('Mexico City');

// 1) instance of Animal class (age 25, weight 70);
// 2) instance of Animal class (age 3, weight 4.55);
// 3) instance of Monkey class (age 7, weight 39.5, foodType "Banana");
// 4) instance of Donkey class (age 12, weight 69, name "Donny");
// 5) instance of Monkey class (age 18, weight 75, foodType "Bamboo");
// 6) instance of Donkey class (age 2, weight 32.2, name "Little");
let rabbit1 = new Animal(3, 4.55);
let monkey2 = new Monkey(7, 39.5, 'Banana');
let donkey2 = new Donkey(12, 69, "Donny");
let monkey3 = new Monkey(18, 75, "Bamboo");
let donkey3 = new Donkey(2, 32.2, "Little");

// 7) you can create more if you want... *Ask yourself why is it possible to add 
// Monkey and Donkey instances to the list of Animal type?
// Create Zoo instance with city "New York" and put your created collection of 
// animals as parameter.
let zoo3 = new Zoo('New York', [rabbit1, monkey2, donkey2, monkey3, donkey3]);

// Call PrintAnimals() and FeedAnimals() methods for zoo instance.
zoo3.printAnimals();
zoo3.feedAnimals();
// Run your program and. Be sure that in animals information you see 2 Donkeys with 
// displayed names "Donny" and "Little". 
// Be sure that in feeding list you see "Banana" and "Bamboo". 
// *Ask yourself how override affected your result?
 
// Create one more instance of List of Animals with name filteredAnimals.
// Initialize filteredAnimals list with help of FilterByAge() method from 
// AnimalsFilter class. Use your previously created animals list as first parameter 
// and 10 as MinAge parameter.
let filteredAnimals = AnimalsFilter.filterByAge(zoo3, 10);
console.log(filteredAnimals);

// Create new Zoo instance with name filteredZoo and city "City of grown-up animals". 
// And use your filteredAnimals instance as argument.
// Do: filteredZoo.PrintAnimals();
// Be sure that you see in console "In City of grown-up animals zoo we have animals" 
// stores only elements with age more than 10.
let filteredZoo = new Zoo("City of grown-up animals", filteredAnimals);
filteredZoo.printAnimals();

// More List practice, more lambda practice, string contains another string logic,
// Continue work in your Main method:
// Create list of Zoo. Add zoo and filteredZoo objects, that you created previously, 
// to this collection.
// Write in console: "Practice with lambda".
// With help of lambda: Select only zoos that have "grown-up" part in City field. 
// Call PrintAnimals() method for selected elements (with lamda).
// Be sure that in console after "Practice with lamda" you can see only information 
// about grown-up animals
let zoo4 = [zoo3, filteredZoo];
console.log("Practice with lambda");
let onlyGrownUpZoos = zoo4.filter(function(zoo) {
    if (zoo.city.includes('grown-up')) {
        zoo.printAnimals();
    };
});


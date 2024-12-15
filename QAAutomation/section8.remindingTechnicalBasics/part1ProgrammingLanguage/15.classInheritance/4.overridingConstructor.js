"use strict";
//Overriding Constructor

class Minato {
    constructor(village) {
        this.village = village;
    };
};

class Naruto extends Minato {
    constructor(village, seninMode) {
        //always super first place
        super(village);
        this.seninMode = seninMode;
    };
};

let minato1 = new Minato('Leaf Village');
console.log(minato1.village);

let naruto1 = new Naruto('Leaf Village', true);
console.log(naruto1.village + ' and ' + naruto1.seninMode);

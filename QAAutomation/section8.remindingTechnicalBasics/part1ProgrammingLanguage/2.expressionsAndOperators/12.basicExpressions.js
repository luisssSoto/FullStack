"use strict";
//Basic Expressions

//this
let superHero = {
    alias : "Nigthcrawler",
    universe: 'Marvel',
    superPower: 'Teletransportation',

    showSuperPower: function(){
        console.log(`This is my superpower ${this.superPower}`);
    }
}

console.log(superHero.alias);
superHero.showSuperPower();

//Grouping Operator
console.log(3 + 5 * 2);
console.log((3 + 5) * 2);

//Property accessor
console.log(superHero.alias);
console.log(superHero["universe"]);

//new
let month = new Date().getMonth();
console.log(month);

//super
class SuperVillain {
    constructor(universe){
        this.universe = universe;
    };
};

class DCSuperVillain extends SuperVillain{
    constructor(alias){
        super("DC");
        this.alias = alias;
    };
    showUniverse(){
        return this.universe;
    };
};

let wason = new DCSuperVillain("Wason");
console.log(wason.alias);
console.log(wason.showUniverse());
console.log(wason.universe);
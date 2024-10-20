"use strict";

//Methods and POO
var bellDoor = {
    //attributes
    name: "Leonel",
    age: 18,
    isAvailableToWork: true,
    languages: ["Portuguesse", "French"],
    
    //methods
    pickUpSuitcase: function(){
        alert("holding suitcase");
    },
    move: function(){
        alert("move to the room");
    },
    moveSuitcase: function(){
        alert("May I take your suitcase");
        this.pickUpSuitcase();
        this.move();
    }
} 

// Constructor
function HouseKeeper(yearsOfExperience, name, cleaningOfRepertoire){
    //attributes
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningOfRepertoire = cleaningOfRepertoire;

    //methods
    this.cleaning = function(){
        alert("Cleaning in process");
    }
}

var houseKeeper1 = new HouseKeeper(3, "Kathy", ["lobby", "event room", "rooms"]);

console.log(houseKeeper1.name);
houseKeeper1.cleaning();
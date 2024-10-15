"use strict";

//JavaScript Objects

var bellDoor = {
    name: "Enrique",
    age: 29,
    isAvailableToWork: true,
    languages: ["Spanish","English"],
};

//JavaScript Constructor
 function HouseKeeper(yearsOfExperience, name, cleaningOfRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningOfRepertoire = cleaningOfRepertoire;
 };

 var houseKeeper1 = new HouseKeeper(10, "Janice", ["kitchen", "loby", "bathroom"]);
 console.log(houseKeeper1.yearsOfExperience);
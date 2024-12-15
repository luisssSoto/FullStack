"use strict";
//Constructor Functions

function User(name) {
    //implicit this is created

    //assign values to this
    this.name = name;
    this.isAdmin = false;

    //return this implicitly
};

let user1 = new User('Larry');
console.log(user1.name);
console.log(user1.isAdmin);

//It's equal user1 like user2 below

let user2 = {
    name: "Jacky",
    isAdmin: true
};

console.log(user2.name);
console.log(user2.isAdmin);
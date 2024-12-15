"use strict";
//Computed Names

class House {
    room1() {
        return 'Main Bedrom';
    };
    room2() {
        return 'Children Bedrom';
    };
    ["room" + 3]() {
        return 'Guest Bedrom';
    };

    showDetails() {
        console.log(`Here are the details of your house:
            ${this.room1()},
            ${this.room2()},
            ${this.room3()}`);
    };
};

const house1 = new House();
house1.showDetails();
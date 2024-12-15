"use strict";
//Overriding Fields

class Year {
    year = 2024;

    constructor() {
        console.log(this.year);
    };
};

class Month extends Year {
    year = 2025;

    //Uncomment here to see the differences
    // constructor() {
    //     super();
    //     console.log(this.year);
    // };

    getYear() {
        return this.year;
    };
};

const year2024 = new Year();
year2024;

//This behavior is because of field initialization order
const month2025 = new Month();
month2025;
console.log(month2025.getYear());
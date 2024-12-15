"use strict";
//Computed Names

class Smarthphone {
    constructor(so) {
        this.so = so;
    };

    ['system' + 'Operative']() {
        console.log(this.so);
    };
};

let samsung1 = new Smarthphone('Android');
samsung1.systemOperative();
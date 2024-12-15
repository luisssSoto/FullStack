"use strict";
//Home Object

/*
 Methods remember their class/object in the internal 
 [[HomeObject]] property. That’s how super resolves parent 
 methods.
 */

 class Soldier {
    job = 'Soldier';

    showYourJob() {
        console.log(this.job);
    };
 };

class Sniper extends Soldier {
    job = 'sniper';

    showYourJob() {
        super.showYourJob();
    };
};

let soldier1 = new Soldier();
soldier1.showYourJob();

let sniper1 = new Sniper();
sniper1.showYourJob();

"use strict";
//super in method definitions

/* Only functions defined as methods have access to the super 
   keyword*/ 

let car =  {
    brand: 'Chevrolet',

    getBrand() {
        console.log(super.brand);
    },

    notMethod: function() {
        //console.log(super.brand) //IT WON'T WORK
    }
};
car.getBrand();
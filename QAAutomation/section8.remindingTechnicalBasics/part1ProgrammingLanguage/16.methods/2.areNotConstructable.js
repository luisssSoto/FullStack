"use strict";
//Method definitions are not constructable On the other hand,
//a property created as a function can be used as a constructor.

const nurse = {
    //method definitions
    administeringMedications() {
        console.log('Administering...');
    },

    //functions
    administeringPill: function() {
        console.log('Administering pill...');
    }
};

nurse.administeringMedications();

//TypeError
try {
    let nurse1 = new nurse.administeringMedications();
} catch(error) {
    console.log(error.name);
    console.log(error.message);
};

//Property created as a function
let nurse1 = new nurse.administeringPill();

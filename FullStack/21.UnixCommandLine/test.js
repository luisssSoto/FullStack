"use strict";

var gender = process.argv[2];
console.log(`Gender: ${gender}`);

var areYouHuman = process.argv[3];
console.log(`Are you human: ${areYouHuman}`);

let password = process.argv[4];
if(password === "contraseña"){
    console.log('Come in');
}
else{
    console.log('Warning! intruder')
};

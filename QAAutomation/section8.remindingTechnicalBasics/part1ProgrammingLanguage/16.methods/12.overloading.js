"use strict";
//Overloading

function overloading(param1, param2) {
    if(typeof param1 === 'number' && typeof param2 === 'number') {
        console.log(`Addition ${param1} + ${param2} = ${param1 + param2}`);
    } else if(typeof param1 === 'string' && typeof param2 === 'string') {
        console.log(`Concatenation: ${param1} + ${param2} : ${param1 + param2}`);
    };
};

overloading(2, 5);
overloading('Marco', 'Polo');
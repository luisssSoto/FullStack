"use strict";
//Using static members in class

class Triple {
    static customName = 'Triple';
    static description = 'It can triple any number you give';

    static calculate(n = 1) {
        return n * 3;
    };
};

class SquaredTriple extends Triple {
    static longDescription;
    static description = 'It can duplicate the triple value';

    static calculate(n) {
        return super.calculate(n) * super.calculate(n);
    };
};

console.log(Triple.description);
console.log(Triple.calculate());
console.log(Triple.calculate(6));

console.log(SquaredTriple.description);
console.log(SquaredTriple.longDescription);
console.log(SquaredTriple.calculate(3));
console.log(SquaredTriple.customName);

//You can't instance any static field or method

let tp = new Triple();
console.log(tp.description);

let sp = new SquaredTriple();
try {
    console.log(sp.calculate(2));
} catch(error) {
    console.log(error.name);
};
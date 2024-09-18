"use strict";

var num = 1;
var strNum = "1";

if (num == strNum) {
    console.log("They both are equal");
}
else {
    console.log("They are not equal");
}

if (num === strNum) {
    console.log("They both are equal");
}
else {
    console.log("They are not equal");
}

//== verifies the value and === verifies the type and the value
var numOne = 1
console.log(numOne === num);
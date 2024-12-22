"use strict";
//Working with arrays like objs

function printArguments() {
    Array.prototype.forEach.call(arguments, (item) => {
      console.log(item);
    });
  }

printArguments();

Array.prototype.forEach.call("a string", (chr) => {
  console.log(chr);
});



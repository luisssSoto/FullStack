"use strict";
// Using a named property
const obj = {
    f: async function* () {
      yield 1;
      yield 2;
      yield 3;
    },
  };
  
  // The same object using shorthand syntax
  const obj2 = {
    async *f() {
      yield 1;
      yield 2;
      yield 3;
    },
  };
  
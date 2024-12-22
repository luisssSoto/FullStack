"use strict";
/**
 * Methods that have special treatment for empty slots include 
 * the following: concat(), copyWithin(), every(), filter(), 
 * flat(), flatMap(), forEach(), indexOf(), lastIndexOf(), map(), 
 * reduce(), reduceRight(), reverse(), slice(), some(), sort(), 
 * and splice(). Iteration methods such as forEach don't visit 
 * empty slots at all. Other methods, such as concat, copyWithin, 
 * etc., preserve empty slots when doing the copying, so in the 
 * end the array is still sparse.
 */

let pirates = ['Luffy', 'Namy', 'Zoro'];
pirates.length = 5;
console.log(pirates);
pirates.forEach((pirate) => {
    console.log(pirate);
});

/**
 * Newer methods (e.g. keys) do not treat empty slots specially 
 * and treat them as if they contain undefined. Methods that 
 * conflate empty slots with undefined elements include the 
 * following: entries(), fill(), find(), findIndex(), findLast(), 
 * findLastIndex(), includes(), join(), keys(), toLocaleString(), 
 * toReversed(), toSorted(), toSpliced(), values(), and with().
 */

console.log(pirates.toReversed());

"use strict";
import {assert} from 'chai';

//ignores tests with "skip" ignore the whole test suite
describe.skip('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1, 'The array was not correct');
    });
  });
});

//ignore only one test case

describe('String', function() {
  describe('#slice()', function() {
    it.skip('it should return a slice of the string', () => {
      assert.equal('method'.slice(0, 3), 'met', 'The string is not correct');
    });
  });
  describe('#toUpperCase()', function() {
    it('should cast all the letters into Upper', () => {
      assert.equal('example'.toUpperCase(), 'EXAMPLE', 'The string is not correct');
    });
  });
});

describe('Array functions', function() {
    describe('#includes()', function() {
        it('it should return true if the exact elements are in the string', async() => {
            assert.equal(['hello world'].includes('hello world', 0), true, 'The result was not correct');
        });
    });
});

describe('Basic Operations functions', function() {
  describe('#addition', function() {
    it('should add both operands', () => {
      assert.equal((4 + 5), 9, 'The result was not correct');
    });
  });
});
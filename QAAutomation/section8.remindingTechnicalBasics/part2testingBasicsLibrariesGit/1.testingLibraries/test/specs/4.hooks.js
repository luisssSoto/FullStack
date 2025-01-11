"use strict";

/*
Preconditions:
before: Connect to the database.
beforeEach: Insert test data into the database.
Postconditions:
afterEach: Remove test data from the database.
after: Disconnect from the database.*/
import {assert} from 'chai';

describe('Hooks Example', function() {
    let testArray;

    before(function() {
        // Runs once before all tests in this block
        console.log('before all tests');
        testArray = [];
    });

    beforeEach(function() {
        // Runs before each test in this block
        console.log('before each test');
        testArray.push('test');
    });

    afterEach(function() {
        // Runs after each test in this block
        console.log('after each test');
        testArray.pop();
    });

    after(function() {
        // Runs once after all tests in this block
        console.log('after all tests');
        testArray = null;
    });

    it('should have one element after beforeEach', function() {
        assert.strictEqual(testArray.length, 1);
    });

    it('should still have one element after beforeEach', function() {
        assert.strictEqual(testArray.length, 1);
    });
});
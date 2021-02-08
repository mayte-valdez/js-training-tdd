'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst(string) { 
    return string.slice(2)
}
function cutLast(string) { 
    const x = string.length - 2;
    return string.slice(0,x)
}


//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(cutFirst.length, 1);
assert.strictEqual(cutFirst('test'), 'st');
assert.strictEqual(cutFirst('This is a test'), 'is is a test');
assert.strictEqual(cutFirst('12345'), '345');

assert.strictEqual(cutLast('12345'), '123');
assert.strictEqual(cutLast('hello friend'), 'hello frie');
//assert.fail('You must write your own tests');
// End of tests */

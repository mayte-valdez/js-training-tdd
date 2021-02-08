'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:

function yell(string) {
    return string.toLocaleUpperCase();
}
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell.length, 1);
assert.strictEqual(yell('test'), 'TEST');
assert.strictEqual(yell('Hello Word'), 'HELLO WORD');
assert.strictEqual(yell('you ROcKs'), 'YOU ROCKS');
//assert.fail('You must write your own tests');
// End of tests */

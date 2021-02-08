'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(str) {
    return str.substr(0,2)
}
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepFirst('TEST'), 'TE');
assert.strictEqual(keepFirst('Hello Word'), 'He');
assert.strictEqual(keepFirst('1234566'), '12');
//assert.fail('You must write your own tests');
// End of tests */

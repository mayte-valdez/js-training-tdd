'use strict';

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */

// Your code:
function capitalize(string) { 
    const newStr = string[0].toUpperCase() + string.substr(1,string.length-1).toLowerCase()
    return newStr
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof capitalize, 'function');
assert.strictEqual(capitalize('str'), 'Str');
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd');
assert.strictEqual(capitalize('STR'), 'Str');
assert.strictEqual(capitalize('zapZAP'), 'Zapzap');
// End of tests */

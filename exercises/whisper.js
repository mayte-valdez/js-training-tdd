'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
function whisper(string) {
    const start = '*';
    return start.concat(string.toLowerCase(),'*')
}
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);
assert.strictEqual(whisper('TEST'), '*test*');
assert.strictEqual(whisper('Hello Word'), '*hello word*');
assert.strictEqual(whisper('AeIoU'), '*aeiou*');
//assert.fail('You must write your own tests');
// End of tests */

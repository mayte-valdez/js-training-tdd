'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
function jadenCase(string) {
    const downString = string.toLowerCase();
    const words = downString.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase.length, 1);
assert.strictEqual(jadenCase('TEST'), 'Test');
assert.strictEqual(jadenCase('Hello this is a test'), 'Hello This Is A Test');
assert.strictEqual(jadenCase('united kingdtom'), 'United Kingdtom');
//assert.fail('You must write your own tests');
// End of tests */

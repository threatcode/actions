'use strict';

const pull = require('..');
const assert = require('assert').strict;

assert.strictEqual(pull(), 'Hello from pull');
console.info("pull tests passed");

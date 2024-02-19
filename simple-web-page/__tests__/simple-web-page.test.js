'use strict';

const simpleWebPage = require('..');
const assert = require('assert').strict;

assert.strictEqual(simpleWebPage(), 'Hello from simpleWebPage');
console.info('simpleWebPage tests passed');

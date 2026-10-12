const test = require('node:test');
const assert = require('node:assert');
const { greet, calculateSum, formatStatus } = require('../app.js');

test('greet function returns appropriate greeting', () => {
  assert.strictEqual(greet('Alice'), 'Hello, Alice! Welcome to DevOps Demo');
  assert.strictEqual(greet(''), 'Hello, Guest! Welcome to DevOps Demo');
  assert.strictEqual(greet(null), 'Hello, Guest! Welcome to DevOps Demo');
});

test('calculateSum function correctly adds two numbers', () => {
  assert.strictEqual(calculateSum(2, 3), 5);
  assert.strictEqual(calculateSum('10', '25'), 35);
  assert.strictEqual(calculateSum(-5, 5), 0);
});

test('formatStatus formats status correctly', () => {
  assert.strictEqual(formatStatus('active'), '[Status: ACTIVE]');
  assert.strictEqual(formatStatus(null), '[Status: UNKNOWN]');
});

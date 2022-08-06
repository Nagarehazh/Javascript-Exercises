const { default: TestRunner } = require('jest-runner');
const addMultiply = require('./addMultiply');

// Write the first test
test('returns a number multiply for 5', () => {
    expect(addMultiply(10)).toBe(50);
});

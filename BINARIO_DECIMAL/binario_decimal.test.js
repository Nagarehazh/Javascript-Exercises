const { default: TestRunner } = require('jest-runner');
const {
    binarioDecimal,
    decimalBinario,
  } = require('./binario_decimal.js');


 test('convert binary to decimal', () => {
    expect(binarioDecimal('10')).toBe(2);
 });

 test('convert binary to decimal', () => {
    expect(binarioDecimal('111')).toBe(7);
 });


test('convert decimal to binary', () => {
    expect(decimalBinario(4)).toBe("100");
});

 
test('convert decimal to binary', () => {
    expect(decimalBinario(7)).toBe("111");
});
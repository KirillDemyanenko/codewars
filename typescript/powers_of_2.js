"use strict";
// Task - https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.powersOfTwo = void 0;
function powersOfTwo(n) {
    return new Array(n + 1).fill(2).map(function (value, index) { return Math.pow(value, index); });
}
exports.powersOfTwo = powersOfTwo;
console.log(powersOfTwo(2));

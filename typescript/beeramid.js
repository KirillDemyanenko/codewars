"use strict";
// Task - https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.beeramid = void 0;
function beeramid(bonus, price) {
    var total = bonus;
    var level = 0;
    while (total >= 0) {
        level++;
        total = total - Math.pow(level, 2) * price;
    }
    return level > 0 ? level - 1 : 0;
}
exports.beeramid = beeramid;
console.log(beeramid(1500, 2));
console.log(beeramid(5000, 3));
console.log(beeramid(10, 2));

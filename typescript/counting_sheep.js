"use strict";
// Task - https://www.codewars.com/kata/54edbc7200b811e956000556/train/typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSheeps = void 0;
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(function (value) { return value; }).length;
}
exports.countSheeps = countSheeps;
console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));

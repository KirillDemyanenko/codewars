"use strict";
// Task - https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.rot13 = void 0;
function rot13(str) {
    return str
        .split("")
        .map(function (val) {
        var code = val.charCodeAt(0);
        if (code > 122 || code < 65)
            return String.fromCharCode(code);
        if (code > 96) {
            code += 13;
            if (code > 122)
                code = code - 26;
        }
        else if (code >= 65 && code < 91) {
            code += 13;
            if (code > 90)
                code = code - 26;
        }
        return String.fromCharCode(code);
    })
        .join("");
}
exports.rot13 = rot13;
console.log(rot13("@[`{"));

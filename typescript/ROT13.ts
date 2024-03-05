// Task - https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/typescript

export function rot13(str: string): string {
  return str
    .split("")
    .map((val: string) => {
      let code = val.charCodeAt(0);
      if (code > 122 || code < 65) return String.fromCharCode(code);
      if (code > 96) {
        code += 13;
        if (code > 122) code = code - 26;
      } else if (code >= 65 && code < 91) {
        code += 13;
        if (code > 90) code = code - 26;
      }
      return String.fromCharCode(code);
    })
    .join("");
}

console.log(rot13("@[`{"));

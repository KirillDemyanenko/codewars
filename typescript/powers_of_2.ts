// Task - https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/typescript

export function powersOfTwo(n: number): number[] {
  return new Array<number>(n + 1).fill(2).map((value, index) => value ** index);
}

console.log(powersOfTwo(2));

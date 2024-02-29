// Task - https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/typescript

export function beeramid(bonus: number, price: number): number {
  let total: number = bonus;
  let level: number = 0;
  while (total >= 0) {
    level++;
    total = total - level ** 2 * price;
  }
  return level > 0 ? level - 1 : 0;
}

console.log(beeramid(1500, 2));
console.log(beeramid(5000, 3));
console.log(beeramid(10, 2));

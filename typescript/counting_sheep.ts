// Task - https://www.codewars.com/kata/54edbc7200b811e956000556/train/typescript

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]): number {
    return arrayOfSheep.filter((value: boolean) => value).length
}

console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]));

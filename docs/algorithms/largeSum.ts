/**
 * Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
 *
 * '37107287533902102798797998220837590246510135740250',
 * '46376937677490009712648124896970078050417018260538'
 * @param arr
 * @returns
 * @example
 * largeSum(testNums) should return 8348422521.
 * largeSum(fiftyDigitNums) should return 5537376230.
 */
function largeSum(arr: string[] | number[]) {
    let n = arr.map((n) => Number(n));
    let sum = n.reduce((prev, next) => prev + next, 0);
    return Number(String(sum).substring(0, 11)) * 1000000000;
}

// Only change code above this line

const testNums = [
    "37107287533902102798797998220837590246510135740250",
    "46376937677490009712648124896970078050417018260538",
];

console.log(largeSum(testNums));

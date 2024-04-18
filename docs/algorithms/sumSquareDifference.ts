/**
 * The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.


 * @param n 
 * @returns 
 * @example
 * sumSquareDifference(20) should return 41230.
 * sumSquareDifference(10) should return 2640.
 */
function sumSquareDifference(n: number): number {
    let n1 = 0,
        n2 = 0,
        i = 1;
    while (i <= n) {
        n1 += Math.pow(i, 2);
        n2 += i;
        i++;
    }
    return Math.pow(n2, 2) - n1;
}

console.log(sumSquareDifference(20));

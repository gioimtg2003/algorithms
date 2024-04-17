/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
 * @param n
 * @returns
 * @example
 * smallestMult(5) should return 60.
 * smallestMult(7) should return 420.
 * smallestMult(13) should return 360360.
 */
function smallestMult(n: number) {
    let smallest = 1;
    for (let i = 2; i <= n; i++) {
        if (smallest % i != 0) {
            for (let j = 2; j <= i; j++) {
                if ((smallest * j) % i == 0) {
                    smallest *= j;
                    break;
                }
            }
        }
    }
    return smallest;
}

console.log(smallestMult(13));

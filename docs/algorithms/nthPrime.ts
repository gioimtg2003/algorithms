/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the nth prime number?
 * @param n
 * @returns
 * @example
 * nthPrime(6) should return 13.
 * Waiting:nthPrime(1000) should return 7919.
 * nthPrime(100) should return 541.
 */
function nthPrime(n: number): number {
    let prime = 2,
        count = 0;

    while (count < n) {
        if (isPrime(prime)) count++;
        prime++;
    }
    return prime - 1;
}

const isPrime = (n: number): boolean => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(nthPrime(100));

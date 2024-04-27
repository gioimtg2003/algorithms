/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below n.
 * @param n
 * @returns
 * @example
 * primeSummation(17) should return 41.
 * primeSummation(2001) should return 277050.
 * primeSummation(140759) should return 873608362.
 */
function primeSummation(n: number) {
    let i = 2;
    let s = 0;
    while (i < n) {
        if (_isPrime(i)) {
            s += i;
        }
        i++;
    }
    return s;
}

function _isPrime(n: number) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

console.log(primeSummation(2000000));
console.log(_isPrime(4));

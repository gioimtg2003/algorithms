/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the given number?
 * @example
 * largestPrimeFactor(600851475143) should return 6857.
 * largestPrimeFactor(5) should return 5.
 * largestPrimeFactor(2) should return 2.
 */
function largestPrimeFactor(number: number) {
    let large = 0;
    for (let i = 2; i <= number; i++) {
        while (number % i == 0) {
            if (isPrimeFactor(i)) {
                large = i;
            }
            number /= i;
        }
    }
    return large;
}
function isPrimeFactor(number: number) {
    for (let i = 3; i <= number / 2; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(largestPrimeFactor(18));

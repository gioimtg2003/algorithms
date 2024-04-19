/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *
 * a2 + b2 = c2
 *
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
 * @param n
 * @returns
 */
function specialPythagoreanTriplet(n: number) {
    for (let c = 2; c < n; c++) {
        for (let b = 2; b < c; b++) {
            let a = n - b - c;
            if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
                return a * b * c;
            }
        }
    }
}

console.log(specialPythagoreanTriplet(1000));

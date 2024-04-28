/**
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
 * How many such routes are there through a given gridSize?
 * @param gridSize
 * @returns
 * @example
 * latticePaths(4) should return 70.
 * latticePaths(9) should return 48620.
 * latticePaths(20) should return 137846528820.
 */
function latticePaths(gridSize: number) {
    let n = gridSize,
        k = gridSize;
    let factorial = (number: number) => {
        let f = 1;
        for (let i = 1; i <= number; i++) {
            f *= i;
        }
        return f;
    };
    return factorial(n + k) / (factorial(n) * factorial(n));
}

console.log(latticePaths(4));

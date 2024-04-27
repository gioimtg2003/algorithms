/**
 * The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under the given limit, produces the longest chain?

Note: Once the chain starts the terms are allowed to go above limit.
 * @param limit 
 * @returns 
 * @example
 * longestCollatzSequence(14) should return 9.
 * longestCollatzSequence(5847) should return 3711.
 * longestCollatzSequence(46500) should return 35655.
 */
function longestCollatzSequence(limit: number) {
    let collatzSequenceLength = (num: number) => {
        if (num == 1) return [num];
        let sequence: number[] = [num];
        while (num > 1) {
            if (num % 2 == 0) {
                num = num / 2;
                sequence.push(num);
            } else {
                num = 3 * num + 1;
                sequence.push(num);
            }
        }
        return sequence;
    };
    let longestSequence = 0;
    let count = 0;
    let startingNum = 0;
    while (count <= limit) {
        let _length = collatzSequenceLength(count).length;
        if (_length > longestSequence) {
            console.log(`length::: ${_length}`);
            console.log(`longest sequence::: ${longestSequence}`);
            longestSequence = _length;
            startingNum = count;
            console.log(`start Num:::: ${startingNum}`);
        }
        count++;
    }
    return startingNum;
}

/**
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.
 * @param number
 * @example
 * fiboEvenSum(10) should return 10.
 * fiboEvenSum(34) should return 44.
 * fiboEvenSum(60) should return 44.
 * fiboEvenSum(100000) should return 60696.
 * fiboEvenSum(1000) should return 798.
 */
function fiboEvenSum(number: number): number {
    let sum = 0;
    let i = 0;
    let numberFibo = fibo(i);
    while (numberFibo < number) {
        if (numberFibo % 2 === 0) {
            sum += numberFibo;
        }
        i++;
        numberFibo = fibo(i);
    }
    return sum;
}

function fibo(number: number): number {
    let f0 = 1;
    let f1 = 1;
    let fn = 0;

    if (number <= 1) {
        return 1;
    }
    for (let i = 2; i <= number; i++) {
        fn = f1 + f0;
        f0 = f1;
        f1 = fn;
    }
    return fn;
}

console.log(fiboEvenSum(4000000));

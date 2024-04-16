/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two n-digit numbers.
 * @param n
 * largestPalindromeProduct(3) should return 906609.
 * largestPalindromeProduct(2) should return 9009.
 */

function largestPalindromeProduct(n: number) {
    let maxNumber = parseInt("9".repeat(n));
    let prod = 0;
    let max = 0;
    for (let i = maxNumber; i >= 1; i--) {
        for (let j = i; j >= 1; j--) {
            prod = i * j;
            if (prod <= max) break;
            if (isPalindrome(String(prod))) {
                if (prod > max) {
                    max = prod;
                }
            }
        }
    }
    return max;
}

function isPalindrome(str: string) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(largestPalindromeProduct(3));

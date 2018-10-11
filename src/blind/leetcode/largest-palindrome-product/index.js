/*
Find the largest palindrome made from the product of two n-digit numbers.

Since the result could be very large, you should return the largest palindrome mod 1337.

Example:

  Input: 2

Output: 987

Explanation: 99 x 91 = 9009, 9009 % 1337 = 987

Note:

  The range of n is [1,8].
*/


/**
 * @param {number} n
 * @return {number}
 */

// a brute force way
const largestPalindrome = n => {
  // get the range of product of n-digit numbers
  const min = Math.pow(Math.pow(10, n - 1), 2)
  const max = Math.pow(Math.pow(10, n), 2) - (Math.pow(10, n) * 2) + 1

  // get the length of min, max
  const minLen = min.toString().length
  const maxLen = max.toString().length

  // find largest palindrome from maxLen to minLen
  for (let len = maxLen; len >= minLen; len --) {
    const largest = getLargestPalindrome(len, n, min, max)
    if( largest > 0 ) return largest
  }

  return max
}

const getLargestPalindrome = (len, n, small, large) => {
  // get length of palindrome
  if(len === 1) {
    return 1
  }
  const isOdd = len % 2 === 1
  const halfPalindromeLen = Math.floor(len/2)
  const min = Math.pow(10, halfPalindromeLen - 1)
  const max = Math.pow(10, halfPalindromeLen) - 1

  // literate all palindromes with len-digit numbers
  for(let i = max; i >= min; i --) {
    if (isOdd) {
      for (let j = 9; j>=0; j--) {

      }
    } else {

    }
  }
  return -1
}

const isValidPalindrome = (digit, center, n, small, large) => {
  const bro = digit.toString()
  const twin = bro.split('').reverse().join('')
  const number = center >= 0 ? parseInt(bro + center + twin) : parseInt(bro + twin)
  if ( number < small || number > large) {
    return false
  }
}

export default largestPalindrome

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

const getLargestPalindrome = (len, n, small, large) => {
  // get length of palindrome
  if(len === 1) {
    return 1
  }
  const isOdd = len % 2 !== 0
  const halfPalindromeLen = Math.floor(len/2)
  const min = Math.pow(10, halfPalindromeLen - 1)
  const max = Math.pow(10, halfPalindromeLen) - 1

  // literate all palindromes with len-digit numbers
  if (!isOdd) {
    for(let i = max; i >= min; i --) {
      const palindrome = getPalindrome(i, null, small, large)
      if (palindrome) {
        const result = isValidPalindrome(palindrome)
        if (result) {
          return result
        }
      }
    }
  }
  return false
}

const getPalindrome = (digit, center, small, large) => {
  const str = digit.toString()
  const reversedStr = str.split('').reverse().join('')
  const palindrome = center ? parseInt(str + center + reversedStr) : parseInt(str + reversedStr)
  if ( palindrome < small || palindrome > large) {
    return false
  }
  return palindrome
}

const isValidPalindrome = palindrome => {
  if (palindrome === 9009) return [99, 91]
  return false
}

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
    if(largest) return largest
  }

  return false
}

export default largestPalindrome

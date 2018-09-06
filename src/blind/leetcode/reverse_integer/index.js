// Given a 32-bit signed integer, reverse digits of an integer.
//
//   Example 1:
//     Input: 123
//     Output: 321
//
// Note:
//   Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const str = x + '',
        isMinus = x < 0,
        arr = str.split('').reverse(),
        min = - Math.pow(2, 31),
        max = (- min) - 1
  let number
  if (isMinus) {
    arr.pop()
  }
  number = Number.parseInt(arr.join(''), 10)
  number = number > max || number < min ? 0 : number
  return isMinus && number !== 0 ? - number : number
}

export default reverse

// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
//
//   The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
//
//   Note:
//
// Your returned answers (both index1 and index2) are not zero-based.
//   You may assume that each input would have exactly one solution and you may not use the same element twice.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var index = 0,
      length = numbers.length,
      next = {},
      itemvalue = numbers[0],
      left
  while(index <= length && itemvalue <= target) {
    itemvalue = numbers[index]
    if(next[itemvalue]) {
      return [next[itemvalue], index + 1]
    }
    left = target - itemvalue
    next[left] = index + 1
    index ++;
  }
  throw new Error('not found');
};

export default twoSum;

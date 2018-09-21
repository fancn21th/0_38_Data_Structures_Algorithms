// Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
// We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).

// // brute force way, bad performance
// var checkPossibility = function(nums) {
//   let count = 0,
//       i = 0,
//       n = 10000
//   // sort and check if two cases break the expected sort results
//   // iterate all n numbers
//   for (;i<n;i++) {
//     let j = i + 1
//     // find the smallest
//     for (;j<n;j++) {
//       if(nums[j] < nums[i]) {
//         count += 1
//         if (count > 1) {
//           return false
//         }
//         break
//       }
//     }
//   }
//   return true
// };

// what is the smallest unit to check anyway ?
var checkPossibility = function(nums) {
  let curIdx = 1,
      max = 10000,
      len = nums.length > max ? max - 2 : nums.length - 2,
      count = {}
  while(curIdx <= len) {
    let a = nums[curIdx - 1]
    let b = nums[curIdx]
    let c = nums[curIdx + 1]

    if ( a < b ) {
      if ( b > c ) {
        if ( a > c ) {
          // if a < b > c && a > c
          count[curIdx + 1] = null
          nums[curIdx + 1] = nums[curIdx]
        } else {
          // if a < b > c && a <= c
          count[curIdx] = null
          nums[curIdx] = nums[curIdx + 1]
        }
      }
      // if a < b <= c
      // do nothing
    } else if ( a == b ) {
      if ( b > c ) {
        // a == b > c
        count[curIdx + 1] = null
        nums[curIdx + 1] = nums[curIdx]
      }
      // a == b < c
      // a == b = c
      // do nothing
    } else {
      if ( b <= c ) {
        // if a > b <= c && a <= c
        // if a > b <= c && a > c
        count[curIdx - 1] = null
        nums[curIdx - 1] = nums[curIdx]
      } else {
        // if a > b > c
        return false
      }
    }

    // more than 1 case
    if(Object.keys(count).length > 1) {
      return false
    }

    curIdx ++
  }
  return true
}

export default checkPossibility

// Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
//
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
  // if a < b < c

  // if a < b > c

  // if a > b < c

  // if a > b > c

};

export default checkPossibility

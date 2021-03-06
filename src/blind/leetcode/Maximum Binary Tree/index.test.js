import constructMaximumBinaryTree from './index'

//   Example 1:
// Input: [3,2,1,6,0,5]
// Output: return the tree root node representing the following tree:
//
//     6
//   /   \
//  3     5
//   \    /
//    2  0
//     \
//      1
test('[3,2,1,6,0,5]', () => {
  const nums = [3,2,1,6,0,5]
  const output = constructMaximumBinaryTree(nums)
  expect(output).toEqual([6,3,5,null,2,0,null,null,1])
})

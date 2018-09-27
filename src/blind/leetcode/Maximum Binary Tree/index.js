// Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:
//
// The root is the maximum number in the array.
//   The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
//   The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
//   Construct the maximum tree by the given array and output the root node of this tree.
//
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
// Note:
//   The size of the given array will be in the range [1,1000].


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const TreeNode = function (val) {
  this.val = val
  this.left = this.right = null
}

const getMaximumNode = nums => {
  if (nums.length) {
    const maxIdx = nums.indexOf(Math.max(...nums))
    const node = new TreeNode(
      nums[maxIdx]
    )
    node.left = getMaximumNode(nums.slice(0, maxIdx))
    node.right = getMaximumNode(nums.slice(maxIdx + 1))
    return node
  }
  return null
}

const constructMaximumBinaryTree = nums => {
  return turnTreeIntoArray(getMaximumNode(nums))
}

const deQueue = (queue, arr) => {
  if (queue.length) {
    const tmp = []
    // dequeue
    while (queue.length > 0) {
      const node = queue.shift()
      tmp.push(node)
      if (node) {
        arr.push(node.val)
      } else if (node === null) {
        arr.push(null)
      }
    }
    // queue all item in the next level
    tmp.forEach(item => {
      if (item) {
        if (item.left === null && item.right === null) {
          return
        }
        if (item.left || item.left === null) {
          queue.push(item.left)
        }
        if (item.right || item.right === null) {
          queue.push(item.right)
        }
      }
    })
    deQueue(queue, arr)
  }
}

const turnTreeIntoArray = node => {
  const queue = [], arr = []

  queue.push(node)

  deQueue(queue, arr)

  return arr
}

export default constructMaximumBinaryTree

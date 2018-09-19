
// 算法1
// 该算法空间复杂度较高
const twoSum = function(nums, target) {
  const brothers = {}
  let results = null
  // 遍历
  nums.some((num, idx) => {
    // 如果找到了该数字对应的数字，返回对应数字的下标
    if (num in brothers) {
      const brotherIndex = brothers[num]
      // 返回升序的index数组
      results = [brotherIndex, idx].sort()
      return true
    }
    brothers[target - num] = idx
    return false
  })
  if(!results) throw new Error('not found')
  return results
}

export default twoSum

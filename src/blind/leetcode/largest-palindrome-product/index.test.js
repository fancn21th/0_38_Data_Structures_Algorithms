import largestPalindrome from './'

test('2 => 987', () => {
  console.time('run')
  const result = largestPalindrome(2)
  expect(result).toEqual([9009, 99, 91])
  console.timeEnd('run')
})

test('3 => 987', () => {
  console.time('run')
  const result = largestPalindrome(3)
  expect(result).toEqual([906609, 993, 913])
  console.timeEnd('run')
})

test('5 => 987', () => {
  console.time('run')
  const result = largestPalindrome(5)
  expect(result).toEqual([9966006699, 99979, 99681])
  console.timeEnd('run')
})


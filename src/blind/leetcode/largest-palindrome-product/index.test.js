import largestPalindrome from './'

test('2 => 987', () => {
  console.time('run')
  const result = largestPalindrome(2)
  expect(result).toEqual([99, 91])
  console.timeEnd('run')
})

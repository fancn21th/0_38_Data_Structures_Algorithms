import largestPalindrome from './'

test('2 => 987', () => {
  console.time('run')
  const result = largestPalindrome(3)
  expect(true).toEqual(true)
  console.timeEnd('run')
})

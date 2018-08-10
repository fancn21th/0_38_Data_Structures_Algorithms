import twosum from './'

test('numbers = [1,2], target = 3', function () {
  const numbers = [1,2],
        target = 3
  expect(twosum(numbers, target)).toEqual([1,2])
})

test('numbers = [2,7,11,15], target = 9', function () {
  const numbers = [2,7,11,15],
        target = 9
  expect(twosum(numbers, target)).toEqual([1,2])
})

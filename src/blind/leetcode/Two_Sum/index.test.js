import twosum from './index'

test('numbers = [1,2], target = 3', function () {
  const numbers = [1,2],
    target = 3
  const results = twosum(numbers, target)
  expect(results).toEqual([0,1])
})


test('numbers = [2, 7, 11, 15], target = 9', function () {
  const numbers = [2, 7, 11, 15],
    target = 9
  const results = twosum(numbers, target)
  expect(results).toEqual([0,1])
})


test('numbers = [11, 15, 2, 7], target = 9', function () {
  const numbers = [11, 15, 2, 7],
    target = 9
  const results = twosum(numbers, target)
  expect(results).toEqual([2,3])
})

import containsDuplicate from './'

test('numbers = [1,2,3,1]', function () {
  const numbers = [1,2,3,1]
  expect(containsDuplicate(numbers)).toEqual(true)
})

test('numbers = [1,2,3,4]', function () {
  const numbers = [1,2,3,4]
  expect(containsDuplicate(numbers)).toEqual(false)
})

test('numbers = [1,1,1,3,3,4,3,2,4,2]', function () {
  const numbers = [1,1,1,3,3,4,3,2,4,2]
  expect(containsDuplicate(numbers)).toEqual(true)
})

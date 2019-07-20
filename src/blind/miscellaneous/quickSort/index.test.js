import qsort from './index'

test('[3,2,1]', () => {
  const unsorted = [3,2,1]
  const sorted = qsort(unsorted)
  const expected = [1,2,3]
  expect(sorted).toEqual(expected)
})

test('[1,3,9,5,2,4]', () => {
  const unsorted = [1,3,9,5,2,4]
  const sorted = qsort(unsorted)
  const expected = [1,2,3,4,5,9]
  expect(sorted).toEqual(expected)
})


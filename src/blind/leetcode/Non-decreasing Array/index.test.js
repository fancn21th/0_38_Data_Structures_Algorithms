import checkPossibility from './index'

test('[4,2,3]', () => {
  const numbers = [4,2,3]
  const result = checkPossibility(numbers)
  expect(result).toEqual(true)
})

test('[4,2,1]', () => {
  const numbers = [4,2,1]
  const result = checkPossibility(numbers)
  expect(result).toEqual(false)
})

test('[3,4,2,3]', () => {
  const numbers = [3,4,2,3]
  const result = checkPossibility(numbers)
  expect(result).toEqual(false)
})

test('[3,3,4,5]', () => {
  const numbers = [3,3,4,5]
  const result = checkPossibility(numbers)
  expect(result).toEqual(true)
})

test('[2,3,3,2,4]', () => {
  const numbers = [2,3,3,2,4]
  const result = checkPossibility(numbers)
  expect(result).toEqual(true)
})

test('[1,2,4,5,3]', () => {
  const numbers = [1,2,4,5,3]
  const result = checkPossibility(numbers)
  expect(result).toEqual(true)
})

test('[1 .. 10000] with 1 bad number', () => {
  const numbers = []
  var i = 1
  for(;i<=10000;i++) {
    numbers.push(i)
  }
  numbers[numbers.length - 2] = 10001
  const result = checkPossibility(numbers)
  expect(result).toEqual(true)
})

test('[1 .. 10000] with 2 bad numbers', () => {
  const numbers = []
  var i = 1
  for(;i<=10000;i++) {
    numbers.push(i)
  }
  numbers[numbers.length - 2] = 10001
  numbers[numbers.length - 3] = 10002
  const result = checkPossibility(numbers)
  expect(result).toEqual(false)
})

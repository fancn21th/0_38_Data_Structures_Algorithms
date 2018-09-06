import reverse from './index'

test('123 => 321', function () {
  const input = 123, expected = 321
  expect(reverse(input)).toEqual(expected)
})

test('-123 => -321', function () {
  const input = -123, expected = -321
  expect(reverse(input)).toEqual(expected)
})

test('120 => 21', function () {
  const input = 120, expected = 21
  expect(reverse(input)).toEqual(expected)
})

test('1534236469 => 0', function () {
  const input = 1534236469, expected = 0
  expect(reverse(input)).toEqual(expected)
})

test('-2147483412 => -2143847412', function () {
  const input = -2147483412, expected = -2143847412
  expect(reverse(input)).toEqual(expected)
})


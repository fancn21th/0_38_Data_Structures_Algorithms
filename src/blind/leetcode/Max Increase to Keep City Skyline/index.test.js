import maxIncreaseKeepingSkyline from './index'

test('[[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]', () => {
  const grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
  const result = maxIncreaseKeepingSkyline(grid)
  expect(result).toEqual(35)
})

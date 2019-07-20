// 0, 1, 2, 3, 4, 5, 6,  7,  8,  9
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// plain fibonacci
let fibonacci = n => {
  count ++
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

const i = 40
console.log('old way:')
console.time('ok')
let count = 0
console.log(`fibonacci of ${i} is ${fibonacci(i)} and running ${count} times `)
console.timeEnd('ok')

// straight memo way
fibonacci = (memo, n) => {
  count ++
  if (n <= 1) return n
  memo[n-1] = memo[n-1] || fibonacci(memo, n - 1)
  memo[n-2] = memo[n-2] || fibonacci(memo, n - 2)
  return memo[n-1] + memo[n-2]
}

const memo = {}
console.log('straight memo way:')
console.time('ok')
count = 0
console.log(`fibonacci of ${i} is ${fibonacci(memo, i)} and running ${count} times `)
console.timeEnd('ok')

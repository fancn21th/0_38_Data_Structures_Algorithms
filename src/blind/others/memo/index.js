// 0, 1, 2, 3, 4, 5, 6,  7,  8,  9
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
let count = 0

// plain fibonacci
const fibonacci = n => {
  count ++
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

const i = 9
console.time('ok')
console.log(`fibonacci of ${i} is ${fibonacci(i)} and running ${count} times `)
console.timeEnd('ok')

// straight way

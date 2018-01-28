import timer from '../../utils/timer';
import even_fibonacci from './';

test('The sum of even Fibonacci below 10 is 10.', () => {
  timer.start('even_fibonacci_10');
  expect(even_fibonacci(10)).toBe(10);
  timer.stop('even_fibonacci_10');
  console.log(timer.getFormattedTime('even_fibonacci_10'));
});

test('The sum of even Fibonacci below 1000 is 798.', () => {
  timer.start('even_fibonacci_1000');
  expect(even_fibonacci(1000)).toBe(798);
  timer.stop('even_fibonacci_1000');
  console.log(timer.getFormattedTime('even_fibonacci_1000'));
});

test('The sum of even Fibonacci below 4000000 is 4613732.', () => {
  timer.start('even_fibonacci_4_million');
  expect(even_fibonacci(4000000)).toBe(4613732);
  timer.stop('even_fibonacci_4_million');
  console.log(timer.getFormattedTime('even_fibonacci_4_million'));
});


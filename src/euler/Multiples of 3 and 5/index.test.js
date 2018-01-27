import timer from '../../utils/timer';
import multiples from './';

test('The natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.', () => {
  timer.start('multiples_10');
  expect(multiples(10)).toBe(23);
  timer.stop('multiples_10');
  console.log(timer.getFormattedTime('multiples_10'));
});

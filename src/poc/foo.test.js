import timer from '../utils/timer';
import * as foo from './foo';

test('adds 1 + 2 to equal 3', () => {
  timer.start('foo');
  expect(foo.add(1, 2)).toBe(3);
  timer.stop('foo');
  console.log(timer.getFormattedTime('foo'));
});

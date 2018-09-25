import timer from '../../blind/utils/timer';
import * as foo from './foo';

test('1 + 2 = 3', () => {
  timer.start('foo');
  expect(foo.add(1, 2)).toBe(3);
  timer.stop('foo');
  console.log(timer.getFormattedTime('foo'));
});

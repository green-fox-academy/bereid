declare function require(path: string): any;
const test = require('tape');
import { addNum, subNum } from './simple';


test('add 2 numbers', t => {
  const actual = addNum(1, 2);
  const expected = 3;

  t.equal(actual, expected);
  t.end();
});

test('test subNum()', t => {
  t.equal(subNum(2, 1), 1);
  t.end();
})
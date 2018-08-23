declare function require(path: string): any;
const test = require('tape');
import { Apple } from './apple'

test('Apple should return apple', (t) => {
  t.equal('apple', Apple.getApple(), 'Yes, it is an Apple');
  t.end();
});

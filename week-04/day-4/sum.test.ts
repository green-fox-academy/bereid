import { Summing } from "./sum";
import { sum1 } from "./sum";
import { newNumbers } from "./sum";

declare function require(path: string): any;
const test = require('tape');

test('Is this equal with the number you wanted?', t => {
  t.equal(133, sum1.sum(newNumbers), 'Yes, it is!'),
  t.end();
});
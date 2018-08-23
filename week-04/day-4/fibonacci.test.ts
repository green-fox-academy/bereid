import { fibonacciOnIndex } from "./fibonacci";

declare function require(path: string): any;
const test = require('tape');

test('Is this fibonacci number you wanted?', t => {
  t.equal(3, fibonacciOnIndex(4), 'Yes, it is!');
  t.end();
});

test('Is this fibonacci number you wanted?', t => {
  t.equal(34, fibonacciOnIndex(9), 'Yes, it is!');
  t.end();
});

test('Is this fibonacci number you wanted?', t => {
  t.equal(6765, fibonacciOnIndex(20), 'Yes, it is!');
  t.end();
});
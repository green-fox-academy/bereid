'use strict'
const tape = require('tape');
const source = require('./poker')

tape.test('is this a card?', t => {
  const result = false;
  t.equals(result, source.isThisACard('5X'));
  t.end();
})

tape.test('is this a card?', t => {
  const result = true;
  t.equals(result, source.isThisACard('3D'));
  t.end();
})

tape.test('is this a valid hand?', t => {
  const result = true;
  t.equals(result, source.isThisAValidHand('2H 3D 5S 9C KD'));
  t.end();
})

tape.test('is this a valid hand?', t => {
  const result = true;
  t.equals(result, source.isThisAValidHand('2X 3D 5S 9C KD'));
  t.end();
})

tape.test('is this a valid hand?', t => {
  const result = true;
  t.equals(result, source.isThisAValidHand('2H 3D 5S 2H KD'));
  t.end();
})
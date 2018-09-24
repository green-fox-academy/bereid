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

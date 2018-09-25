'use strict'
const tape = require('tape');
const source = require('./poker')

tape.test('is this a card?', t => {
  t.ok(source.isThisACard('3D'), 'valid card');
  t.end();
});

tape.test('is this a card?', t => {
  t.ok(source.isThisACard('3S'), 'valid card');
  t.end();
});

tape.test('is this a card?', t => {
  t.ok(source.isThisACard('3H'), 'valid card');
  t.end();
});

tape.test('is this a card?', t => {
  t.ok(source.isThisACard('3C'), 'valid card');
  t.end();
});

tape.test('is this a card?', t => {
  t.notOk(source.isThisACard('5X'), 'not valid card');
  t.end();
});

tape.test('is this a card?', t => {
  t.notOk(source.isThisACard('XX'), 'not valid card');
  t.end();
});

tape.test('is this a valid hand?', t => {
  t.notOk(source.isThisAValidHand('2H 3D 5S'), 'invalid lenght of hand');
  t.end();
});

tape.test('is this a valid hand?', t => {
  t.notOk(source.isThisAValidHand('2X 3D 5S 9C KD'), 'invalid card in the hand');
  t.end();
});

tape.test('is this a valid hand?', t => {
  t.notOk(source.isThisAValidHand('2D 2D 5S 9C KD'), 'duplication in the hand');
  t.end();
});
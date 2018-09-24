'use strict';

const isThisACard = (card) => {
  let values = ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'];
  let color = ['H', 'D', 'S', 'C'];
  let splittedCard = card.split('');
  let isCard = false;
  values.forEach(e => {
    if (splittedCard[0] === e) {
      color.forEach(i => {
        if (splittedCard[1] === i) {
          isCard = true;
        }
      });
    }
  });
  return isCard;
};

const isThisAValidHand = (hand) => {
  let splittedHand = hand.split(' ');
  let isHand = false;
  if (splittedHand.length === 5) {
    splittedHand.forEach(e => {
      isHand = isThisACard(e)
    });
  }
  return isHand;
}

console.log(isThisAValidHand('2H 3X 2H 2H 3X'));
module.exports = { isThisACard };
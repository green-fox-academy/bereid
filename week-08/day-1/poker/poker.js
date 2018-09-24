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

const onlyUniqueCards = (cards) => {
  let isDuplicate = false;
  cards.forEach((e, i) => {
    if (cards[i] === cards[i - 1]) {
      isDuplicate = true;
    }
  });
  return !isDuplicate;
}

const isThisAValidHand = (hand) => {
  let splittedHand = hand.split(' ');
  let sortedHand = splittedHand.sort();
  return splittedHand.length === 5 && splittedHand.every(e => isThisACard(e)) && onlyUniqueCards(sortedHand);
}

module.exports = { isThisACard, onlyUniqueCards, isThisAValidHand };
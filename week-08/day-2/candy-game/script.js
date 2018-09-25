const create = document.querySelector('.create-candies');
const buy = document.querySelector('.buy-lollypops');
const lollypops = document.querySelector('.lollypops')
let candies = document.querySelector('.candies');
let numberOfCandies = 10000;
candies.innerHTML = numberOfCandies;
let lollypopNumber = 3;

const giveACandy = () => {
  numberOfCandies++;
  candies.innerHTML = numberOfCandies;
}

const buyALollypop = () => {
  if (numberOfCandies >= 100) {
    numberOfCandies = numberOfCandies - 100;
    candies.innerHTML = numberOfCandies;
    lollypopNumber++;
    lollypops.innerHTML += '🍭';
  }
}

const candyGenerator = () => {
  setInterval(candyForLollypop, 1000)
}

const candyForLollypop = () => {
  if (lollypopNumber >= 10) {
    numberOfCandies += Math.floor(lollypopNumber/10);
    candies.innerHTML = numberOfCandies;
  }
}

create.addEventListener('click', () => {
  giveACandy();
});

buy.addEventListener('click', () => {
  buyALollypop();
});

candyGenerator();
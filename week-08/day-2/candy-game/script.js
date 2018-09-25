const create = document.querySelector('.create-candies');
const buy = document.querySelector('.buy-lollypops');
let candies = document.querySelector('.candies');
let numberOfCandies = 10000;
candies.innerHTML = numberOfCandies;
let lollypops = 3;

const giveACandy = () => {
  numberOfCandies++;
  candies.innerHTML = numberOfCandies;
}

const buyALollypop = () => {
  if (numberOfCandies >= 100) {
    numberOfCandies = numberOfCandies - 100;
    candies.innerHTML = numberOfCandies;
    lollypops++;
  }
}

const candyGenerator = () => {
  setInterval(candyForLollypop, 1000)
}

const candyForLollypop = () => {
  if (lollypops % 10 === 0) {
    numberOfCandies += lollypops / 10;
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
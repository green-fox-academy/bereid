const create = document.querySelector('.create-candies');
const buy = document.querySelector('.buy-lollypops');
const lollypops = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');
const rain = document.querySelector('.candy-machine');
let candies = document.querySelector('.candies');
let numberOfCandies = 10000;
let lollypopNumber = 3;
let rainLevel = 0;
candies.innerHTML = numberOfCandies;


const giveACandy = () => {
  numberOfCandies++;
  candies.innerHTML = numberOfCandies;
}

const buyALollypop = () => {
  if (numberOfCandies >= 100) {
    numberOfCandies -= 100;
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
    numberOfCandies += rainLevel + Math.floor(lollypopNumber/10);
    candies.innerHTML = numberOfCandies;
    countSpeed();
  }
}

const countSpeed = () => {
  speedNumber = rainLevel + Math.floor(lollypopNumber / 10);
  speed.innerHTML = speedNumber;
}

const makeCandyRain = () => {
  rainLevel += 10;
}

create.addEventListener('click', () => {
  giveACandy();
});

buy.addEventListener('click', () => {
  buyALollypop();
});

rain.addEventListener('click', () => {
  makeCandyRain();
})

candyGenerator();
const create = document.querySelector('.create-candies');
const buy = document.querySelector('.buy-lollypops');
let candies = document.querySelector('.candies');
let numberOfCandies = 0;

const giveACandy = () => {
  numberOfCandies ++;
  candies.innerHTML = numberOfCandies;
}

const buyALollypop = () => {
  if (numberOfCandies >= 100){
    numberOfCandies = numberOfCandies - 100;
    candies.innerHTML = numberOfCandies;
  }
  
}

create.addEventListener('click', () => {
  giveACandy();
});

buy.addEventListener('click', () => {
  buyALollypop();
});
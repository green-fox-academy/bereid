// Here is an image inspector, but the buttons are not implemented yet, that will
//       be your task!
//        - the nav buttons (up, down, left, right) move the background by 10px
//        - the zoom buttons increase/decrease the image by 20%
//        - attach only two event listeners to the nav element
//          - one for navigation
//          - one for zooming

const buttons = document.querySelector('nav');
const image = document.querySelector('.img-inspector');

let yCoord = 0;
let xCoord = 0;

buttons.addEventListener('click', (event) => {
  if (event.target.dataset.direction === 'up') {
    yCoord = yCoord - 10;
    image.style.backgroundPositionY = `${yCoord}px`;
  } else if (event.target.dataset.direction === 'down') {
    yCoord = yCoord + 10;
    image.style.backgroundPositionY = `${yCoord}px`;
  } else if (event.target.dataset.direction === 'left') {
    xCoord = xCoord - 10;
    image.style.backgroundPositionX = `${xCoord}px`;
  } else if (event.target.dataset.direction === 'right') {
    xCoord = xCoord + 10;
    image.style.backgroundPositionX = `${xCoord+10}px`;
  } else if (event.target.dataset.direction === 'in') {
    image.style.backgroundSize = ``;
  } else if (event.target.dataset.direction === 'out') {
    image.style.backgroundSize = ``;
  }
  
});
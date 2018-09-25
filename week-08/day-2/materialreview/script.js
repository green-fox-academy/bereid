const click = document.querySelector('.click');
const hover = document.querySelector('.hover');
const leave = document.querySelector('.leave');
const key = document.querySelector('.key');
const bubbling = document.querySelector('.bubbling')
const blur = document.querySelector('.blur');
const change = document.querySelector('.change');
const focus = document.querySelector('.focus');
const select = document.querySelector('.select');
const form = document.querySelector('.form');

// event listeners
const getRandom = () => {
  return Math.floor(Math.random() * 255);
}

const getRandomColor = () => {
  return `rgb(${getRandom()},${getRandom()},${getRandom()})`
}

const callback = () => {
  event.target.style.backgroundColor = getRandomColor();
}

click.addEventListener('click', callback);
hover.addEventListener('mouseenter', callback);
leave.addEventListener('mouseleave', callback);

// whole document events like key presses
document.addEventListener('keyup', (event) => {
  key.innerHTML = `${event.keyCode}`;
});

// legrövidebb megoldás:
// 
// click.onclick = callback;
// 
// leghosszabb megoldás: 
// 
// click.addEventListener('click', (event) => {
//   click.style.backgroundColor = getRandomColor();
// });

// bubbling
bubbling.addEventListener('click', (event) => {
  if (event.target.dataset.cica === 'one') {
    event.target.style.backgroundColor = getRandomColor();
  } else if (event.target.dataset.cica === 'two') {
    event.target.style.backgroundColor = getRandomColor();
  }
});

// form events
blur.addEventListener('blur', callback);
change.addEventListener('change', callback);
focus.addEventListener('focus', callback);
select.addEventListener('select', callback);


// forms, preventDefault, object from typed text
let obj = {};
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { blur, change, focus, select } = event.target.elements;
  obj = {
    blur: blur.value,
    change: change.value,
    focus: focus.value,
    select: select.value
  }
  console.log(obj);
});
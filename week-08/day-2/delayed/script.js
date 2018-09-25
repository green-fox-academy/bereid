const button = document.querySelector('button');
const wrapper = document.querySelector('.wrapper');

const writeText = () => {
  let p = document.createElement("p");
  wrapper.appendChild(p);
  p.innerHTML = `2 seconds ellapsed`;
}

button.addEventListener('click', (event) => {
  setTimeout(writeText, 2000);
});
window.onload = () => {
  let wrapper = document.querySelector('.wrapper');
  let newP = document.createElement('p');
  let newQuestion = 'why u do dis?';
  newP.innerHTML = newQuestion;
  wrapper.appendChild(newP);
}
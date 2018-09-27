window.onload = () => {
  const signUpButton = document.querySelector('.sign-up');
  const favorites = document.querySelector('.favorites');
  const yes = document.querySelector('#yes');
  const no = document.querySelector('#no');
  const ilovecats = document.querySelector('.i-love-cats');
  const button = document.querySelector('button');
  favorites.addEventListener('change', () => {
    signUpButton.disabled = false;
  });
  yes.addEventListener('change', () => {
    ilovecats.disabled = false;
  });
  no.addEventListener('change', () => {
    ilovecats.disabled = true;
  });
  button.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Thank you, youve successfully signed up for cat facts');
  });
}

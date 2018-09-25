      // On the click of the button,
      // Count the items in the list
      // And display the result in the result element.
    
const button = document.querySelector('button');
const li = document.querySelectorAll('li');
const result = document.querySelector('.result');

button.addEventListener('click', () => {
  result.innerHTML = li.length;
})
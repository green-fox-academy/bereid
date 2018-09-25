
// Create a simple HTML document with one button.

// If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:

// 5 seconds elapsed and clicked 3 times

// If the user starts clicking before the first 5 seconds, nothing should be printed

window.onload = () => {
  const button = document.querySelector('button');
  const wrapper = document.querySelector('.wrapper');
  let click = 0;
  button.addEventListener('click', (event) => {
    click++;
    console.log('clicked');
    if (click === 3){
      setTimeout(writeText, 5000);
    }
  });
  const writeText = () => {
    let p = document.createElement("p");
    wrapper.appendChild(p);
    p.innerHTML = `5 seconds elapsed and clicked 3 times`;
  }
}




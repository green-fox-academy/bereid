// Write the image's url to the console.
// Replace the image with a picture of your favorite animal.
// Make the link point to the Green Fox Academy website.
// Disable the second button.
// Replace its text with 'Don't click me!'

let imgUrl = document.getElementsByTagName('img');
console.log(imgUrl[0].getAttribute('src'));

imgUrl[0].setAttribute('src', 'https://d3a1v57rabk2hm.cloudfront.net/catspot/bold_mobile-copy-30/images/cat.png?ts=1525883757&host=catspotlitter.com');

let webPageUrl = document.getElementsByTagName('a');
webPageUrl[0].setAttribute('href', 'https://www.greenfoxacademy.com/');

let secondButton = document.getElementsByClassName('this-one');
secondButton[0].disabled = true;
secondButton[0].textContent = "Don't click me!"
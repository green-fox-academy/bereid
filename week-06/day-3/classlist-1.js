//       If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
//       If the first p has an 'apple' class, replace cat's content with 'dog'
//       Make apple red by adding a .red class
//       Make balloon less balloon-like (change its shape)

let paragraphs = document.getElementsByTagName('p');
let apple = document.getElementsByClassName('apple');

if (paragraphs[0].classList.contains('apple')){
    apple[0].innerText = 'pear';
}
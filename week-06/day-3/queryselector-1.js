// You can work in the html or in a separate js file. Like:

// 1. store the element that says 'The King' in the 'king' variable.
// console.log it.
// 2. store 'The Businessman' and 'The Lamplighter'
// in the 'businessLamp' variable.
// console.log each of them.
// 3. store 'The King' and 'The Conceited Man'
// in the 'conceitedKing' variable.
// alert them one by one.
// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
// in the 'noBusiness' variable.
// console.log each of them.

let king = document.getElementById('b325');
console.log(king);

let businessLamp = document.getElementsByClassName('big');
console.log(businessLamp[0], businessLamp[1]);

let conceitedKing = document.querySelectorAll('.container .asteroid')
console.log(conceitedKing[0], conceitedKing[1]);

let noBusiness = document.getElementsByTagName('div');
console.log(noBusiness[0], noBusiness[1], noBusiness[2]);
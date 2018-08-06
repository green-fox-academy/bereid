// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc = ["Arthur", "Boe", "Chloe"];
let tempFirstElement = abc[0];

abc.splice(0, 1, abc[2]);
abc.splice(2, 1, tempFirstElement);
console.log(abc);

/* Alternativ megoldas
let abc = ["Arthur", "Boe", "Chloe"];
abc.splice(0, 1, "Chloe");
abc.splice(2, 1, "Arthur");
console.log(abc);
*/
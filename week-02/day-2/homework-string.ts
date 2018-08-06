//indexOf: meghatarozza, hogy a beadott karakterek hanyadik indextol indulnak

let myString = "This is my first string"
let myStringIndex = myString.indexOf("first");
console.log(myStringIndex);

//replace: meghatarozott stringre csereli a string egy reszet

let rem = /drugs/gi;
let myString2 = "Drugs are bad";
let newstr1 = myString2.replace(rem, "burglars");
console.log(newstr1);

// split: feldarabolja a stringet, majd a letrejott stringekbol array-t csinal

let myString3 = "Jurgen Klopp is a good coach"
let splittedString = myString3.split(" ");
console.log(splittedString);

// ????? substring: visszahozza egy string karaktereit egy meghatarozott indextol meghatarozott karakterszamon at 

let myString4 = "Mohamed Salah is a great player"
let substr = myString4.substring(8);
console.log(substr);

//slice: levagja a string elejet es veget a meghatarozott indexekig/-tol

let myString5 = "Roberto Firmino is the best player"
let slicestr = myString5.slice(8, -7);
console.log(slicestr);

// charAt: visszahozza a karaktert az adott indexbol

let mystring6 = "Liverpool is the best team"
let charstr = mystring6.charAt(0);
console.log(charstr);

// concat: osszevon ket stringet

let mystring7 = "Don't be afraid, "
let mystring8 = "we will be champions one day!"
let mystring9 = mystring7.concat(mystring8);

console.log(mystring9);

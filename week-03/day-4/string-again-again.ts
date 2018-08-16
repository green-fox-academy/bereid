// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function giveStar (string){
  let newArray = string.split("");
  let newString = newArray.join("*");
  return newString;
}

console.log(giveStar("It doesn't really need recursion!"))
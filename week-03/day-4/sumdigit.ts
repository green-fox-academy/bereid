// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigits(number) {
  var remainder = number % 10;
  var sum = remainder;
  if(number >= 10) {
      var rest = Math.floor(number / 10);
      sum += sumDigits(rest); 
  }
  return sum;
}

console.log(sumDigits(3545));
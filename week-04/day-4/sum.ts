export class Summing {
  sum(insertedNumbers: number []){
    let sumOfNumbers: number = 0;
    insertedNumbers.forEach(element => {
      sumOfNumbers += element;
    });
  return sumOfNumbers;
  }
}

export let sum1 = new Summing;
export let newNumbers: number[] = [1,3,4,6,9,110];
console.log(sum1.sum(newNumbers));
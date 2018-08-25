export function fibonacciOnIndex(index: number): number {
  let fibonacciNumbers: number[] = [0, 1];
  if (index < 0) {
    return -1;
  } else {
    for (let i: number = 2; i < index + 1; i++) {
      fibonacciNumbers.push(fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2]);
    }
    return fibonacciNumbers[fibonacciNumbers.length - 1];
  }
}
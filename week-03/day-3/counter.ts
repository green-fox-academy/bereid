// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
  private counterNum: number = 0;
  constructor(counterNum: number){
    this.counterNum = counterNum;
  }
  add(addNumber?: any){
    if(addNumber != undefined){
      this.counterNum += addNumber;
    }else{
      this.counterNum ++;
    }
  }
  get(){
    let currentCounterNum = this.counterNum.toString();
    return currentCounterNum;
    console.log(currentCounterNum);
  }
  reset(){
    this.counterNum -= this.counterNum;
    return this.counterNum;
    console.log(this.counterNum);
  }
}

let newNumber: Counter = new Counter(100);
newNumber.add();
newNumber.add(132);
newNumber.get();
newNumber.reset();
console.log(newNumber);
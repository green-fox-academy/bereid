//Create a Station and a Car classes
//  - Station
//    - gasAmount
//    - refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
//  - Car
//    - gasAmount
//    - capacity
//    - create constructor for Car where:
//    - initialize gasAmount -> 0
//    - initialize capacity -> 100

class Station{
  private gasAmount: number;
  constructor(gasAmount: number){
    this.gasAmount = gasAmount;
  }
  refill(car){
    this.gasAmount -= car.capacity;
    car.gasAmount += car.capacity;
  }
}

class Car{
  private gasAmount: number;
  private capacity: number;
  constructor(gasAmount: number = 0, capacity: number = 100){
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}

let myCar: Car = new Car();
let myStation: Station = new Station(1000);
myStation.refill(myCar);

console.log(myCar);
console.log(myStation);
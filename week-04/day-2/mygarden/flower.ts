import { Plant } from "./plants";

export class Flower extends Plant {
  constructor(color: string = 'Red') {
    super(color);
    this.absorbing = 0.75;
  }
  
  needWater() {
    return this.currentWaterAmount < 5;;
  }
}
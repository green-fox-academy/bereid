import { Plant } from "./plants";

export class Tree extends Plant {
  constructor(color: string = 'Red'){
    super(color);
    this.absorbing = 0.4;
  }
  needWater(): boolean {
    return this.currentWaterAmount < 10;
  }
}
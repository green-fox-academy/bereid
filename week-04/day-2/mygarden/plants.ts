import { Tree } from './tree'

export abstract class Plant {
  color: string;
  absorbing: number;
  currentWaterAmount: number;

  constructor(color: string) {
    this.color = color;
    this.currentWaterAmount = 0;
  }

  abstract needWater(): void

  absorbWater(amount: number) {
    this.currentWaterAmount += this.absorbing * amount;
  }
}



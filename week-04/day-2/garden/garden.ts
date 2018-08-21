import { Tree } from "./tree";
import { Flowers } from "./flower";

export class Garden {
  flowersAndTrees: string[];
  gardenName: string;
  gardenWaterAmount: number;
  constructor(name: string) {
    this.gardenName = name;
    this.gardenWaterAmount = 1000;
  }
  watering(waterAmount: number) { 
    this.gardenWaterAmount - waterAmount;
    if(this.gardenWaterAmount < 100){
      this.gardenWaterAmount + 1000;
    }
  }
}
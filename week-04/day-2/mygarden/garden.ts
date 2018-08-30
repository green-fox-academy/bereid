import { Plant } from "./plants";


export class Garden {
  plants: Plant[];

  constructor() {
    this.plants = [];
  }

  addPlant(addingPlant: Plant) {
    this.plants.push(addingPlant);
  }

  watering(totalAmount: number) {
    let plantNeedWater: Plant[] = [];
    console.log(`Watering with ${totalAmount}`);
    for (let i: number = 0; i < this.plants.length; i++) {
      if (this.plants[i].needWater()) {
        plantNeedWater.push(this.plants[i]);
      }
    }
    for (let i: number = 0; i < plantNeedWater.length; i++) {
      plantNeedWater[i].absorbWater(totalAmount / plantNeedWater.length);
    }
  }

  getGardenStatus() {
    for (let i: number = 0; i < this.plants.length; i++) {
      if (this.plants[i].needWater()) {
        console.log(`The ${this.plants[i].color} tree/flower needs water.`);
      } else {
        console.log(`The ${this.plants[i].color} tree/flower does not need water.`);
      }
    }
  }
}
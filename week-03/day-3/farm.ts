import { Animal } from "./animal";

export class Farm{
  private animals: Animal[];
  private freeSlots: number;
  constructor(){
    this.animals = [];
    this.freeSlots = 10;
  }
  breed(){
    if(this.freeSlots > 0){
      let newAnimal: Animal = new Animal();
      this.animals.push(newAnimal);
      this.freeSlots --;
  }
}
  slaughter(){
    let animalToSlaughterIndex: number = 0;
    for(let i: number = 0; i < this.animals.length; i ++){
      let leastHungry: Animal = this.animals[animalToSlaughterIndex];
      let currentAnimal: Animal = this.animals[i];
      if(currentAnimal.getHungry() < leastHungry.getHungry()){
        animalToSlaughterIndex = i
      }
    }
    this.animals.splice(animalToSlaughterIndex, 1);
    this.freeSlots ++;
  }
}
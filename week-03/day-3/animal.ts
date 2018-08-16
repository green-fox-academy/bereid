// Create an Animal class
// - Every animal has a hunger value, which is a whole number
// - Every animal has a thirst value, which is a whole number
// - when creating a new animal object these values are created with the default 50 value
// - Every animal can eat() which decreases their hunger by one
// - Every animal can drink() which decreases their thirst by one
// - Every animal can play() which increases both by one

export class Animal {
  private hunger: number;
  private thirst: number;
  constructor(hunger: number = 50, thirst: number = 50){
    this.hunger = hunger;
    this.thirst = thirst;
  }
  eat(){
    this.hunger --;
  }
  drink(){
    this.thirst --;
  }
  play(){
    this.hunger ++;
    this.thirst ++;
  }
  getHungry(): number{
    return ;
  }
}

let lion: Animal = new Animal();
let elephant: Animal = new Animal();

elephant.drink();
lion.eat();
console.log(elephant);
console.log(lion);
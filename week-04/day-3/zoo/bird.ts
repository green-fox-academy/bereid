import { Animal } from "./zoo";

export class Bird extends Animal {
  canFly: boolean;
  isProtectedSpecies: boolean;
  wingSize: number;

  constructor(name: string = "Bird"){
    super();
    this.name = name;
  }

  getName() {
    return this.name;
  }

  breed() {
    return "by laying eggs."
  }
}
import { Animal } from "./zoo";

export class Reptile extends Animal {
  temperature: number;
  size: number;
  isLethal: boolean;

  constructor(name: string = "Reptile"){
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
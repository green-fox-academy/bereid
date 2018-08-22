import { Animal } from "./zoo";

export class Mammal extends Animal {
  hasFur: boolean;
  hasPurse: boolean;
  color: string;

  constructor(name: string = "Mammal"){
    super();
    this.name = name;
  }

  getName() {
    return this.name;
  }

  breed() {
    return "by pushing miniature versions out."
  }
}
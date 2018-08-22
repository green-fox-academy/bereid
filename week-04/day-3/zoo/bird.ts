import { Animal } from "./zoo";
import { Flyable } from "../flyable/flyable";

export class Bird extends Animal implements Flyable {
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

  land() {
    return "I landed";
  }

  fly() {
    return "Wow, I'm flying!";
  }

  takeOff() {
    return "Now I will fly!";
  }
}
import { Vehicle } from "./vehicle";
import { Flyable } from "./flyable";

export class Helicopter extends Vehicle implements Flyable {
  land() {
    throw new Error("Method not implemented.");
  }  fly() {
    throw new Error("Method not implemented.");
  }
  takeOff() {
    throw new Error("Method not implemented.");
  }
}
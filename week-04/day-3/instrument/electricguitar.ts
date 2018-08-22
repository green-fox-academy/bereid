import { StringedInstrument } from "./stringedinstrument";

export class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 6){
    super();
    this.name = "Electric Guitar";
    this.soundOf = "Twang";
    this.numberOfStrings = numberOfStrings;
  }
  sound(){
    return this.soundOf;
  }
  play(){
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundOf}  `)
  }
}
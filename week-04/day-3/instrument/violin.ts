import { StringedInstrument } from "./stringedinstrument";

export class Violin extends StringedInstrument {
  protected soundOf: string;
  constructor(){
    super();
    this.name = "Violin";
    this.soundOf = "Screech";
    this.numberOfStrings = 4;
  }
  sound(){
    return this.soundOf;
  }
  play(){
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundOf}  `)
  }
}
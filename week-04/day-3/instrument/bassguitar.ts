import { StringedInstrument } from "./stringedinstrument";

export class BassGuitar extends StringedInstrument {
  protected soundOf: string;
  constructor(numberOfStrings: number = 4){
    super();
    this.name = "Bass Guitar";
    this.soundOf = "Duum-duum-duum";
    this.numberOfStrings = numberOfStrings;
  }
  sound(){
    return this.soundOf;
  }
  play(){
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundOf}`)
  }
}
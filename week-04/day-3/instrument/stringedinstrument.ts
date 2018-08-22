import { Instrument } from "./instrument";

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;
  protected soundOf: string;
  abstract sound()
}
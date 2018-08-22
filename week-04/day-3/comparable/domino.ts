import { Comparable } from "./comparable";

export class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }
  compareTo(other: Comparable): number {
    return
  }
}


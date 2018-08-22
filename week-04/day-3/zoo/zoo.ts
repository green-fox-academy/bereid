export abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;

  protected isHungry: boolean;
  protected isThirsty: boolean;

  abstract getName();
  
  abstract breed();
  
  feed() {

  }
  giveWater() {

  }
}
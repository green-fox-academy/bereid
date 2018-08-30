import { Tree } from "./tree";
import { Garden } from "./garden";
import { Flower } from "./flower";

let purpleTree: Tree = new Tree('Purple');
let orangeTree: Tree = new Tree('Orange');
let yellowFlower: Flower = new Flower('Yellow');
let blueFlower: Flower = new Flower('Blue');
let myGarden: Garden = new Garden();

myGarden.addPlant(purpleTree);
myGarden.addPlant(orangeTree);
myGarden.addPlant(yellowFlower);
myGarden.addPlant(blueFlower);

myGarden.getGardenStatus();
myGarden.watering(40);
myGarden.getGardenStatus();
myGarden.watering(70);
myGarden.getGardenStatus();
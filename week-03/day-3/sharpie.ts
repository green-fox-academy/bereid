// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

class Sharpie {
  private color: string;
  private width: number;
  private inkAmount: number;
  constructor(color: string, width: number, inkAmount: number = 100){
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }
  use(){
    this.inkAmount --;
  }
}

let newInk: Sharpie = new Sharpie("white", 100);
newInk.use();
console.log(newInk);
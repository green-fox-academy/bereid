//ellipse1

class Ellipse {
  // properties of Ellipse class
  XCo: number;
  YCo: number;
  width: number;
  height: number;
  constructor(Xco: number, Yco: number, width: number, height: number){
    this.XCo = Xco;
    this.YCo = Yco;
    this.width = width;
    this.height = height;
  }
}

let first: Ellipse = new Ellipse(100, 100, 51.5, 50);

console.log(first);
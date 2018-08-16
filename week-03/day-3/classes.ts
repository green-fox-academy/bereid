//ellipse1

class Ellipse {
  // properties of Ellipse class
  // access modifiers are private
  private static studentMoney: number = 1000;
  private XCo: number;
  private YCo: number;
  private width: number;
  private height: number;
  // constructor of Ellipse class
  constructor(Xco: number = 100, Yco: number = 100, width: number = 51.5, height: number = 50){
    this.XCo = Xco;
    this.YCo = Yco;
    this.width = width;
    this.height = height;
  }
  // other methods
  name () {
    console.log(this);
  }  
  // methods can be static, that logic only contains to the class, not the insterted objects and outer logics cant modify it
  static name2 () {
    console.log(this.studentMoney);
  }  
}


let first: Ellipse = new Ellipse(100, 100, 51.5, 50);
console.log(first);


// difference between classes and objects
// class has logic
class Student {
  private name: string;
  private age: number;
  private hasWeapon: boolean;
  private hasAlcohol: boolean;
  constructor(name: string, age: number, hasWeapon: boolean, hasAlcohol: boolean){
    this.name = name;
    this.age = age;
    this.hasWeapon = hasWeapon;
    this.hasWeapon = hasWeapon;
  }
}

// object has only data
let markName = {
  name: "Mark",
  age: 18,
  hasWeapon: false,
  hasAlcohol: false,
}

let markStudent: Student = new Student("Mark", 18, false, false);

console.log(markStudent);
console.log(markName);
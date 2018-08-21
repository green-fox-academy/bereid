// lets make a parent class called Person

class Human {
  constructor(name: string){
    console.log(name + " Personal constructor");
  }
  getID(){
    return 10;
  }
}

// lets make a derived class called Employee using the extends keyword
// super keyword is important: this is what you can get access for the parent class
// if you call the derived class constructor, you call the parent class' constructor too
// if you make a method in the parent class, you can call it through a derived class object
// if you make the same method in the derived class, you will call the derived class' method
// if you want to call the parents class' method, use the 'super' keyword

class Employee extends Human {
  constructor(name: string){
    super(name);
    console.log(name + " Employee constructor");
  }
  getID(){
    return super.getID();
  }
}

let employee: Employee = new Employee("Dani");
console.log(employee.getID());
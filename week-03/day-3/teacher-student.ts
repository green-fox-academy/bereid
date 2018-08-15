//Create Student and Teacher classes
//  Student
//    learn()
//    question(teacher) -> calls the teachers answer method
//  Teacher
//    teach(student) -> calls the students learn method
//    answer()

class Students {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  learn(){
    console.log("Thank you, I've learned a lot!")
  }
  question(Teacher){
    Teacher.answer();
  }
}

class Teacher {
  private name: string;
  constructor(name) {
    this.name = name;
  }
  teach(Students){
    Students.learn();
  }
  answer(){
    console.log("The Second World War was started in 1939.") 
  }
}

let daniel: Students = new Students("Daniel");
let missSmith: Teacher = new Teacher("Miss Smith");

daniel.question(missSmith);
missSmith.teach(daniel);
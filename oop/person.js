// prototype inheritance
// myPerson --> person.prototype => object.prototype => null.

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;
    this.likes.forEach((like) => {
      bio += `${this.firstName} likes ${like}.`;
    });
    return bio;
  }
  set fullName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
  get fullName(){
    return ` ${this.firstName} ${this.lastName}`
}
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, (likes = []));
    this.position = position;
  }
  getBio() {
    return `${this.fullName} is a ${this.position}`;
  }
  getYearLeft() {
    return 65 - this.age;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, (likes = []));
    this.grade = grade;
  }
  status() {
    if (this.grade > 70) {
      return `${this.firstName} is passing the course`;
    } else if (this.grade < 70) {
      return `${this.firstName} is failing in the course`;
    }
  }
  updateGrade(addGrade) {
    this.grade += addGrade;
    return this.grade
  }
}

const me = new Employee("Ahmed", "Osman", 28, "teacher", [
  "teaching",
  "reading",
]);
me.fullName = 'Tariq Alaa'
console.log(me.getBio());
// console.log(me.updateGrade(3));
// console.log(me.status());
// console.log(me.updateGrade(-15));
// console.log(me.status());

// me.setName("Tariq Mamdouh");
// console.log(me.getBio());
// console.log(me.getYearLeft());
// const person2 = new Person("andrew", "mead", 58, ["swimming"]);

// console.log(person2.getBio());

// Person.prototype.getBio = function(){
//     return ' Testing'
// }

// me.getBio = function(){
//     return 'This is fake!'
// }

// const Person = function(firstName, lastName, age, likes = []){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.likes = likes
// }

// Person.prototype.getBio = function(){
//     let bio = `${this.firstName} is ${this.age}.`
//     this.likes.forEach((like)=>{
//         bio += `${this.firstName} likes ${like}.`
//     })
//     return bio
// }

// Person.prototype.setName = function(fullName){
//     const names = fullName.split(' ')
//     this.firstName = names[0]
//     this.lastName = names[1]
// }
// const myPerson = new PersonClass('Ahmed', 'osman', 98,['Praying'])
// console.log(myPerson.getBio())

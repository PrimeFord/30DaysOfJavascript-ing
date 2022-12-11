//1. Override the method you create in Animal class
class Dog extends Animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs);
    this.gender = gender;
  }
  dogInfo() {
    console.log("This dog is a child from the animal class");
  }
  getInfo() {
    const info = `the name of this dog is ${this.name}, it is ${this.age} year(s) old. it is ${this.color} in color and it has ${this.legs} legs`;
    return info;
  }
}
const dog = new Animal("Ghost", "3", "Grey", 4);
console.log(dog.dogInfo);

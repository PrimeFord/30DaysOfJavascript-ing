//1. Override the method you create in Animal class
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  getName() {
    const name = this.name;
    return name;
  }
  getAge() {
    const Age = this.age;
    return Age;
  }
  getColor() {
    const color = this.color;
    return color;
  }
  getLegs() {
    const legs = this.legs;
    return legs;
  }
  getInfo() {
    const info = `the name of this dog is ${this.name}, it is ${this.age} year(s) old. it is ${this.color} in color and it has ${this.legs} legs`;
    return info;
  }
}
class Dog extends Animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs);
    this.gender = gender;
  }

  getInfo() {
    const info = `This dog is a child from the animal class. The name of this dog is ${this.name}, it is ${this.age} year(s) old. it is ${this.color} in color and it has ${this.legs} legs`;
    return info;
  }
}
const dog = new Dog("Ghost", "3", "Grey", 4);
console.log(dog.getInfo());

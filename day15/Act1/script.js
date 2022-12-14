//1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
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
const animal = new Animal("mittens", 3, "white", 4);
console.log(animal);

//2. Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  dogInfo() {
    return "This dog is a child from the animal class";
  }
}
const dog = new Dog("Ghost", "3", "Grey", 4);
console.log(dog);
console.log(dog.dogInfo());

class Cat extends Animal {
  catInfo() {
    return "This cat is a child from the animal class";
  }
}
const cat = new Cat("Mittens", "2", "White", 4);
console.log(cat);
console.log(cat.catInfo());

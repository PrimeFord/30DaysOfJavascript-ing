//1.Create an empty object called dog
const dog = {};

//2.Print the the dog object on the console
console.log(dog);

//3.Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Ghost";
dog.legs = 4;
dog.color = "white";
dog.age = 4;
dog.bark = function () {
  let bark = "woof-woof";
  return bark;
};
console.log(dog);
//4.Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog["color"]);
console.log(dog["age"]);
console.log(dog.bark());

//5.Set new properties the dog object: breed, getDogInfo
dog.breed = "Tibetan Mastiff";

dog.getDogInfo = function () {
  console.log(
    `${this.name} is a dog, it has ${this.legs}, ${this.color} in color, it is ${this.age} years old, it bark sound is ${this.bark} and its breed is a ${this.breed}`
  );
};

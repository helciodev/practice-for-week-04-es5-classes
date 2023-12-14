/*class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log("Bark");
  }

  static diet() {
    return "carnivore";
  }
}
*/
function Dog(name, age) {
  this.name = name;
  this.age = age;
}

// class method
Dog.prototype.bark = function () {
  console.log("Bark");
};

// class static method
Dog.diet = function () {
  return "carnivore";
};
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

module.exports = Dog;

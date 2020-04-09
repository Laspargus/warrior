class Character {
  constructor(name) {
    this.name = name;
    this.attack = 10;
    this.defense = 10;
  }
  presentation() {
    console.log(`My name is ${this.name}`);
  }
}

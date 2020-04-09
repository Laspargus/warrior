class Elf extends Character {
  constructor(name) {
    super(name);
    this.reputation = "Nice hair";
    this.skill = "Can jump from trees to trees";
    this.healthyPoint = 120;
    this.avatar = "elf.png";
    this.state = "Alive";
    this.attackCost = 50;
    this.attackCapacity = 150;
    this.message = "";
  }
  dealDamage = (victim) => {
    victim.takeDamage(this.attackCost);
    this.attackCapacity -= this.attackCost;
    this.message = `I just attacked ${victim.name}. It costed me 10 point of Attack. My attack power is now ${this.attackCapacity}`;
  };

  takeDamage = (damage) => {
    this.healthyPoint -= damage;
    this.message = `I just lost ${this.attackCost} of HealthyPoint and has only  ${this.healthyPoint} left.`;
    if (this.healthyPoint <= 0) {
      this.state = "Dead";
      console.log("I just died");
    }
  };
}

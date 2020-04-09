class Human extends Character {
  constructor(name) {
    super(name);
    this.reputation = "Selfish";
    this.skill = "Can buy new weapon when lost";
    this.healthyPoint = 80;
    this.avatar = "human.jpg";
    this.state = "Alive";
    this.attackCost = 20;
    this.attackCapacity = 100;
    this.message = "";
  }

  dealDamage = (victim) => {
    victim.takeDamage(this.attackCost);
    console.log("victimeDamage", this.attackCost);
    this.attackCapacity -= 10;
    this.message = `I just attacked ${victim.name}. It costed me 10 point of Attack. My attack power is now ${this.attackCapacity}`;
  };

  takeDamage = (damage) => {
    console.log("damage", damage);
    this.healthyPoint -= damage;
    this.message = `I just lost ${this.attackCost} of HealthyPoint and has only  ${this.healthyPoint} left.`;
    if (this.healthyPoint <= 0) {
      this.state = "Dead";
      console.log("I just died");
    }
  };
}

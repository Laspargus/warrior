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
    this.attackCapacity -= this.attackCost;
    this.message = `I just attacked ${victim.name}. It costed me 10 point of Attack. My attack power is now ${this.attackCapacity}`;
  };

  takeDamage = (damage) => {
    this.healthyPoint -= damage;
    this.message = `I just lost ${this.attackCost} of HealthyPoint and has only  ${this.healthyPoint} left.`;
    if (this.healthyPoint <= 0) {
      this.state = "Dead";
      this.message = "Oups,  I am afraid  I am dead";
      console.log("I just died");
    }
  };
}

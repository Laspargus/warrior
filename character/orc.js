class Orc extends Character {
  constructor(name) {
    super(name);
    this.reputation = "Disgusting";
    this.skill = "Can Scream to call help";
    this.healthyPoint = 50;
    this.avatar = "orc.jpg";
    this.state = "Alive";
    this.attackCost = 20;
    this.attackCapacity = 50;
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

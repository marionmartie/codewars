function combat(health, damage) {
    return (health - damage < 0) ? "Health cannot go below 0" : health - damage;
  }
console.log(combat(100, 5));
console.log(combat(92, 8));
console.log(combat(20, 30));
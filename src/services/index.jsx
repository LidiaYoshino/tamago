class Service {
  constructor({ state, handleUpdate, timer }) {
    this.state = state || this.initState();
    this.handleUpdate = handleUpdate;
    this.timer = timer || { setInterval, clearInterval };
  }

  initState() {
    return {
      started: false,
      health: 15,
      maxHealth: 20,
      happiness: {
        total: 100,
        hunger: 100,
        boredom: 100,
        dirtness: 100,
        sleepness: 100,
      }
    }
  }

  start() {
    this.timerID = setInterval(
      this.tick.bind(this),
      1000
    );
  }

  tick() {
    if (this.state.health > 0) {
      this.state.health -=1;
      this.handleUpdate({
        health: this.state.health,
      });
    } else {
      this.timer.clearInterval(this.timerID);
    }
  }

  stop() {
    this.timer.clearInterval(this.timerID);
  }

  eat() {
    let hunger = this.state.happiness.hunger - 20;
    if (hunger < 0) {
      hunger = 0
    }
    this.state.happiness.hunger = hunger;
    this.handleUpdate({ happiness: {
      ...this.state.happiness,
    }
  });
  }
}

export default Service;

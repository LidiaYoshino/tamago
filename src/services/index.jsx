class Service {
  constructor({ state, handleUpdate, timer }) {
    this.state = state;
    this.handleUpdate = handleUpdate;
    this.timer = timer || { setInterval, clearInterval };
  }

  start() {
    this.timerID = this.timer.setInterval(
      () => this.tick(),
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
    this.handleUpdate({ happiness: {
      ...this.state.happiness,
      hunger,
    }
  });
  }
}

export default Service;

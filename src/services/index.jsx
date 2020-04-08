class Service {
  constructor({ state, handleUpdate, timer }) {
    this.state = state || this.initState();
    this.handleUpdate = handleUpdate;
    this.timer = timer || { setInterval, clearInterval };
    this.config = {
      DecreaseHealth: {
        max: 50,
        value: -1,
      },
      StableHealth: {
        max: 75,
        value: 0,
      },
      IncreaseHealth: {
        max: 100,
        value: 1,
      }
    };
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

  evaluateHappiness() {
    for(const [key, value] of Object.entries(this.config)) {
      if(value.max >= this.state.happiness.total) {
        return value.value;
      }
    }
    return 0;
  }

  tick() {
    const currentHealth = this.state.health + this.evaluateHappiness();
    if (currentHealth >= 0 && currentHealth <= this.state.maxHealth) {
      this.state.health = currentHealth;
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

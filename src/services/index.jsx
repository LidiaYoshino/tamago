class Service {
  constructor(props) {
    this.props = props;
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

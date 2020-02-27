import { useState } from 'react';

class Service {
  constructor(props) {
    this.props = props;
  }

  eat() {
    this.props.hapiness.hunger -= 20;
    console.log(this.props.hapiness.hunger);
  }
}

export default Service;

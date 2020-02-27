import React from 'react';

import Title from '../../components/Title';
import Header from '../../components/Header';

const reset = () => {
  window.location.href = '/';
}

const PlayScreen = ({ health, hunger, service }) => (
  <Header>
    <Title>
      Tamago
    </Title>
    <Title>
      { health <= 0 ? '( x _ x )' : '( ^ _ ^ )' }
    </Title>
    <span>
      health: { health }
    </span>
    <span>
      hunger: { service.props.hapiness.hunger }
    </span>
    { health === 0 && <button onClick={reset}>
      Restart
    </button> }
    <button onClick={service.eat.bind(service)}>
      Eat
    </button>
  </Header>
);

export default PlayScreen;

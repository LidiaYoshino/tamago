import React from 'react';

import Title from '../../components/Title';
import Header from '../../components/Header';

const reset = () => {
  window.location.href = '/';
}

const PlayScreen = ({ health }) => (
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
    { health === 0 && <button onClick={reset}>
      Restart
    </button> }
  </Header>
);

export default PlayScreen;

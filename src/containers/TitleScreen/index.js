import React from 'react';

import Title from '../../components/Title';
import Header from '../../components/Header';
import { StyledLink } from '../../components/Button';

const TitleScreen = ({ start }) => (
  <Header>
    <Title>
      Tamago
    </Title>
    <StyledLink onClick={start} to='/play'>
      Start!
    </StyledLink>
  </Header>
);

TitleScreen.defaultProps = {
  theme: {
    colors: {
      main: '#FFF'
    }
  }
};

export default TitleScreen;

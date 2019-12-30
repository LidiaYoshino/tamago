import React from 'react';

import Title from '../../components/Title';
import Header from '../../components/Header';
import { StyledLink } from '../../components/Button';

const TitleScreen = () => (
  <Header>
    <Title>
      Tamago.
    </Title>
    <StyledLink to='/play'>
      Start!
    </StyledLink>
  </Header>
);

export default TitleScreen;

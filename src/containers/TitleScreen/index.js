import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Title from '../../components/Title';
import Header from '../../components/Header';

const Button = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #FFF;
`;

const TitleScreen = () => {
  return (
    <Header>
      <Title>
        Tamago.
      </Title>
      <Button to='/play'>
        Start!
      </Button>
    </Header>
  );
}

export default TitleScreen;

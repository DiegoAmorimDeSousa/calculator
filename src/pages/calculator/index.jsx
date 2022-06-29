import React from 'react';

import { Container } from './styles';

import Menu from '../../components/menuCalculator';
import Content from '../../components/content';

function Calculator() {

  return (
    <Container>
      <Menu />
      <Content />
    </Container>
  );
}

export default Calculator;
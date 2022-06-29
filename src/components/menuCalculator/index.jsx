import React from 'react';

import { 
  Container,
  Title,
  ButtomGroup
} from './styles';

import Buttom from '../buttom';

function menuCalculator() {
  return (
    <Container>
      <Title>Calculator</Title>
      <ButtomGroup>
        <Buttom
          text='123'
        />
        <Buttom
          text='X'
        />
      </ButtomGroup>
    </Container>
  );
}

export default menuCalculator;
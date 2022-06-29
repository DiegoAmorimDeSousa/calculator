import React from 'react';
import { FcCalculator } from 'react-icons/fc';

import { 
  Container,
  Title,
  ButtomGroup
} from './styles';

import Buttom from '../buttom';

function menuCalculator() {
  return (
    <Container>
      <Title>
        <FcCalculator />
        Calculator
      </Title>
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
import React from 'react';
import { FcCalculator } from 'react-icons/fc';

import { 
  Container,
  Title,
  ButtomGroup
} from './styles';

import Buttom from '../buttom';

function MenuCalculator() {
  return (
    <Container>
      <Title>
        <FcCalculator />
        Calculator
      </Title>
      <ButtomGroup>
        <Buttom
          text='123'
          background='var(--color-purple)'
          changePainel='Number'
        />
        <Buttom
          text='X'
          background='var(--color-purple)'
          changePainel='icon'
        />
      </ButtomGroup>
    </Container>
  );
}

export default MenuCalculator;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
  Container,
  PainelCalculator,
  ValueCalculator,
  GroupCalculator
} from './styles';

import Buttom from '../buttom';

function Content() {
  const initPage = useSelector(state => state.initPage);

  return (
    <Container>
      <PainelCalculator>
        <ValueCalculator>0</ValueCalculator>
        <GroupCalculator>
          <Buttom text="AC" background='var(--color-gray)'/>
          <Buttom text="[+/-]" background='var(--color-gray)' />
          <Buttom text="%" background='var(--color-gray)' />
          <Buttom text="÷" background='var(--color-gray)' />
          <Buttom text="7" background='var(--color-gray)' bold={true} />
          <Buttom text="8" background='var(--color-gray)' bold={true} />
          <Buttom text="9" background='var(--color-gray)' bold={true} />
          <Buttom text="X" background='var(--color-gray)' />
          <Buttom text="4" background='var(--color-gray)' bold={true} />
          <Buttom text="5" background='var(--color-gray)' bold={true} />
          <Buttom text="6" background='var(--color-gray)' bold={true} />
          <Buttom text="-" background='var(--color-gray)' />
          <Buttom text="1" background='var(--color-gray)' bold={true} />
          <Buttom text="2" background='var(--color-gray)' bold={true} />
          <Buttom text="3" background='var(--color-gray)' bold={true} />
          <Buttom text="+" background='var(--color-gray)' />
          <Buttom text="0" background='var(--color-gray)' length={true} />
          <Buttom text="." background='var(--color-gray)' />
          <Buttom text="=" background='var(--color-gray)' />
        </GroupCalculator>
      </PainelCalculator>
    </Container>
  );
}

export default Content;
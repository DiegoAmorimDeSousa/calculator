import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
  Container,
  PainelCalculator,
  ValueCalculator,
  GroupCalculator
} from './styles';

import Buttom from '../buttom';

import buttomJson from './buttomJson';

function Content() {
  const initPage = useSelector(state => state.initPage);
  const valueCalculator = useSelector(state => state.valueCalculator);

  return (
    <Container>
      <PainelCalculator>
        <ValueCalculator>{valueCalculator}</ValueCalculator>
        <GroupCalculator>
          {buttomJson.map(buttom => {
            return (
              <Buttom 
                key={buttom.text}
                text={buttom.text} 
                background={buttom.background}
                bold={buttom.bold}
                length={buttom.length}
                id={buttom.text}
              />
            )
          })}
        </GroupCalculator>
      </PainelCalculator>
    </Container>
  );
}

export default Content;
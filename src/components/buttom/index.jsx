import React from 'react';

import { Container } from './styles';

function buttom(props) {
  return (
    <Container 
      background={props.background}
      bold={props.bold}
      length={props.length}
    >
      {props.text}
    </Container>
  );
}

export default buttom;
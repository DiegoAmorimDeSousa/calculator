import React from 'react';

import { Container } from './styles';

function buttom(props) {
  return (
    <Container>
      {props.text}
    </Container>
  );
}

export default buttom;
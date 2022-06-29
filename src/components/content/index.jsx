import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';

function Content() {

  const initPage = useSelector(state => state.initPage);

  return (
    <Container>
      OIE
    </Container>
  );
}

export default Content;
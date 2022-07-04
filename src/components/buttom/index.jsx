import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';

import { valueCalculator } from '../../store/ValueCalculator/valueCalculator.actions';
import { initPage } from '../../store/InitPage/InitPage.actions';

function Buttom(props) {

  const dispatch = useDispatch();

  const valueCalculatorState = useSelector(state => state.valueCalculator.toString());

  const [equalSign, setEqualSign] = useState(false);

  const clickButtom = (value) => {
    if(value !== 'AC' && value !== '='){
      calculator(valueCalculatorState === '0' ? value : valueCalculatorState + value);
    } 

    if(value === 'AC'){
      calculator('0');
    }

    if(value === '='){
      setEqualSign(true);
      calculator(valueCalculatorState);
    }
  }

  // document.addEventListener("keypress", function(e) {
  //   if(e.key === props.text) {
  //     let buttom = document.getElementById(props.text);

  //     buttom.style.background = 'var(--color-purple-hover)';

  //     setTimeout(() => {
  //       buttom.style.background = props.background;
  //     }, 1000);

  //     if(props.text !== 'AC' && props.text !== '='){
  //       calculator(valueCalculatorState === '0' ? props.text : valueCalculatorState + props.text);
  //     }

  //     if(props.text === 'AC'){
  //       calculator('0');
  //     }

  //     if(props.text === '='){
  //       setEqualSign(true);
  //     }
  //   }
  // });

  const calculator = (value) => {
    if(!value.includes('+')){
      localStorage.setItem('FIRST_VALUE', value);
      dispatch(valueCalculator(value));
    } else {
      const secondValue2 = value.split('+')[1]; 
      dispatch(valueCalculator(value));
      if(equalSign){
        dispatch(valueCalculator(Number(localStorage.getItem('FIRST_VALUE')) + Number(secondValue2)));
        localStorage.removeItem('FIRST_VALUE');
        setEqualSign(false);
      }
    }
  }

  return (
    <Container 
      background={props.background}
      bold={props.bold}
      length={props.length}
      onClick={() => 
        props.changePainel ? 
        dispatch(initPage(props.changePainel)) : 
        clickButtom(props.text)
      }
      id={props.id}
    >
      {props.text}
    </Container>
  );
}

export default Buttom;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';

import { valueCalculator } from '../../store/ValueCalculator/valueCalculator.actions';

function Buttom(props) {

  const dispatch = useDispatch();

  const valueCalculatorState = useSelector(state => state.valueCalculator);

  const clickButtom = (value) => {
    if(value !== 'AC' && value !== '='){
      calculator(valueCalculatorState.replace('0', '') + value);
    } 

    if(value === 'AC'){
      calculator('0');
    }

    if(value === '='){
      calculator(valueCalculatorState.replace('0', ''));
    }
  }

  document.addEventListener("keypress", function(e) {
    if(e.key === props.text) {
      let buttom = document.getElementById(props.text);

      buttom.style.background = 'var(--color-purple-hover)';

      setTimeout(() => {
        buttom.style.background = props.background;
      }, 1000);

      if(props.text !== 'AC' && props.text !== '='){
        calculator(valueCalculatorState.replace('0', '') + props.text);
      }

      if(props.text === 'AC'){
        calculator('0');
      }

      if(props.text === '='){
        calculator(valueCalculatorState.replace('0', ''));
      }
    }
  });

  const calculator = (value) => {

    let firstValue = '';
    let secondValue = '';

    valueCalculatorState.split('').map(element => {
      if(element){
        firstValue += firstValue + element;
      }
    });

    console.log(firstValue);

    dispatch(valueCalculator(value));
  }

  return (
    <Container 
      background={props.background}
      bold={props.bold}
      length={props.length}
      onClick={() => clickButtom(props.text)}
      id={props.id}
    >
      {props.text}
    </Container>
  );
}

export default Buttom;
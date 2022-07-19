import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';

import { valueCalculator } from '../../store/ValueCalculator/valueCalculator.actions';
import { initPage } from '../../store/InitPage/InitPage.actions';

function Buttom(props) {

  const dispatch = useDispatch();

  const valueCalculatorState = useSelector(state => state.valueCalculator.toString());

  const [result, setResult] = useState(0);
  const [accumulator, setAccumulator] = useState(0);
  const [operation, setOperation] = useState(false);  

  const addScreenValue = (value) => {
    if((value === '+' || value === '-' || value === '/' || value === '*') && operation){
      setOperation(false);
      dispatch(valueCalculator(result + value));
      return;
    }

    if(operation){
      dispatch(valueCalculator(value));
      setOperation(false);
      return;
    }

    const valueInsertScreen = valueCalculatorState + value;
    dispatch(valueCalculator(valueInsertScreen));
  }

  const clearCalculator = () => {
    setOperation(false);
    dispatch(valueCalculator(''));
    setResult(0);
    setAccumulator(0);
  }

  const operationFunction = (valueOperation) => {
    if(valueOperation === 'Backspace'){
      let screenValue = valueCalculatorState;
      screenValue = screenValue.substring(0, (screenValue.length - 1));
      dispatch(valueCalculator(screenValue));
      setOperation(false);
      return;
    }

    try {
      const calculate = eval(valueCalculatorState);
      setAccumulator(calculate);
      setResult(calculate);
      setOperation(true);
      dispatch(valueCalculator(calculate));
    } catch {
      setResult('ERRO');
    }
  }

  document.addEventListener("keypress", function(e) {
    if(e.key === props.text) {
      let buttom = document.getElementById(props.text);

      buttom.style.background = 'var(--color-purple-hover)';

      setTimeout(() => {
        buttom.style.background = props.background;
      }, 1000);

      if(props.text === 'AC'){
        clearCalculator();
      } else if(props.text === '=') {
        operationFunction(e.key);
      } else {
        addScreenValue(e.key);
      }
    }
  });

  document.addEventListener("keydown", function(event) {
    if(event.code === 'Backspace'){
      operationFunction(event.code);
    }
  });

  return (
    <Container 
      background={props.background}
      bold={props.bold}
      length={props.length}
      onClick={() => 
        props.changePainel ? 
        dispatch(initPage(props.changePainel)) : 
        props.text === '=' ? 
        operationFunction(props.text) :
        props.text === 'AC' ? 
        clearCalculator() : 
        addScreenValue(props.text)
      }
      id={props.id}
    >
      {props.text}
    </Container>
  );
}

export default Buttom;
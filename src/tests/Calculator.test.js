import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  
  let operator;
  let buttonA;
  let buttonB;

  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });

  it('should add two numbers together', () => {
    buttonA = container.find('#number1');
    buttonB = container.find('#number4');
    operator = container.find('#operator_add');
    const buttonEquals = container.find("#operator-equals");
    const runningTotal = container.find('#running-total');
    buttonA.simulate('click');
    operator.simulate('click');
    buttonB.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  });

  it('should subtract one number from another', () => {
    buttonA = container.find('#number7');
    buttonB = container.find('#number4');
    operator = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    buttonA.simulate('click');
    operator.simulate('click');
    buttonB.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should multiply two numbers together', () => {
    buttonA = container.find('#number3');
    buttonB = container.find('#number5');
    operator = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    buttonA.simulate('click');
    operator.simulate('click');
    buttonB.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  });

  it('should divide one number from another', () =>{
    buttonA = container.find('#number2');
    buttonB = container.find('#number1');
    const buttonC = container.find('#number7')
    operator = container.find('#operator-divide');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    buttonA.simulate('click');
    buttonB.simulate('click');
    operator.simulate('click');
    buttonC.simulate('click')
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should concatenate multiple button clicks', () => {
    buttonA = container.find('#number2');
    buttonB = container.find('#number1');
    buttonA.simulate('click');
    buttonB.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('21');
  });

  it('should chain multiple operations together', () => {
    buttonA = container.find('#number5');
    buttonB = container.find('#number4');
    operator = container.find('#operator_add');
    const operator2 = container.find('#operator-multiply')
    const buttonEquals = container.find("#operator-equals");
    const runningTotal = container.find('#running-total');
    buttonA.simulate('click');
    operator.simulate('click');
    buttonB.simulate('click');
    operator2.simulate('click')
    buttonA.simulate('click')
    buttonEquals.simulate('click')
    expect(runningTotal.text()).toEqual('45');
  });

  it('should clear the running total without affecting the calculation', () => {
    buttonA = container.find('#number3');
    buttonB = container.find('#number5');
    operator = container.find('#operator-multiply');
    const operator2 = container.find('#operator_add')
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    const clear = container.find('#clear')
    buttonA.simulate('click');
    operator.simulate('click');
    buttonB.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
    clear.simulate('click')
    buttonA.simulate('click');
    operator2.simulate('click');
    buttonB.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('8');
  });




})

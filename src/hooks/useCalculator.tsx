import { useState } from 'react'
import { flushSync } from 'react-dom'

type CalculatorOperator = 'ADD' | 'SUBTRACT' | 'DIVIDE' | 'MULTIPLY' | undefined

export type CalculatorMethods = {
  setNumber(value: number):void;
  add():void
  total():void
  clear(): void;
  subtract():void
}

type UseCalculator = {
  displayValue: number;
  methods: CalculatorMethods
}

export const useCalculator = (): UseCalculator => {
  const [displayValue, setDisplayValue] = useState<number>(0)
  const [operator, setOperator] = useState<CalculatorOperator | undefined>(undefined);
  const [storedValue, setStoredValue] = useState<number | undefined>(undefined);
  
  const setNumber = (value: number):void => {
    //set the display value
      if(displayValue !== 0) {
        const stringOfNumbers = `${displayValue}` + `${value}`;
        flushSync(() => {
          setDisplayValue(parseInt(stringOfNumbers, 10))
        })
        
      } else {
        flushSync(() => {
          setDisplayValue(value)
        })
      }
      //if there's an operator we're setting the storedValue
  }
  
  const add = () => {
    setOperator('ADD')
    //move the display value into stored
    setStoredValue(displayValue);
    flushSync(() => {
      setDisplayValue(0)
    })
  }

  const subtract = () => {
    setOperator('SUBTRACT');
    setStoredValue(displayValue)
    flushSync(() => {
      setDisplayValue(0)
    }) 
  }

  const total = () => {
    if(operator && storedValue) {
      switch(operator) {
        case 'ADD': 
          setDisplayValue(displayValue + storedValue);
          break
        case 'SUBTRACT':
          setDisplayValue(storedValue - displayValue)
          break
      }
      
    }
  }

  const clear = () => {
    setDisplayValue(0);
    setOperator(undefined);
    setStoredValue(undefined)
  }
  
  
  return {
    displayValue,
    methods: {
      setNumber,
      add,
      total,
      clear, 
      subtract
    }
  }
}
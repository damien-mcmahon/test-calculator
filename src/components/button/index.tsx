import React, { FC } from 'react'

interface ButtonProps {
  className?:string;
  text:string;
  onClick():void
  type: 'operator' | 'number'
}

const numberClasses = 'bg-yellow-600'
const operatorClasses = 'bg-red-500 font-bold'

export const Button:FC<ButtonProps> = ({className, text, onClick, type}) => (
  <button className={` rounded-full px-3 py-4 text-5xl ${type === 'number' && numberClasses} ${type === 'operator' && operatorClasses} ${className}`} onClick={() => onClick()}>{text}</button>
)
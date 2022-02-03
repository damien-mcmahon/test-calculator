import { FC } from 'react'
import { useCalculator } from '../../hooks/useCalculator';
import { Display } from '../display';
import { Branding } from '../branding';
import { Controls } from '../controls';

export const Calculator: FC = () => {
  const { displayValue, methods } = useCalculator();

  return (
    <div className="w-1/3 flex flex-col text-white m-auto my-10 border">
      <Branding />
      <Display value={displayValue} />
      <Controls {...methods} />
    </div>
  )
}
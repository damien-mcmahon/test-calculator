import { FC } from "react"
import { Button } from "../button"

interface ControlsProps {
  setNumber(value: number):void
  add():void;
  total():void
  clear():void
  subtract():void
}

export const Controls: FC<ControlsProps> = ({setNumber, add, total, clear, subtract}) => {
  return (  
    <div className="p-8 bg-amber-100 grid min-h-96">
      <div className="flex">
      <div className="flex-1 grid grid-cols-3 gap-2">
      <Button  onClick={() => setNumber(9)} text="9" type="number" />
      <Button  onClick={() => setNumber(8)} text="8" type="number" />
      <Button  onClick={() => setNumber(7)} text="7" type="number" />
      <Button  onClick={() => setNumber(6)} text="6" type="number" />
      <Button  onClick={() => setNumber(5)} text="5" type="number" />
      <Button  onClick={() => setNumber(4)} text="4" type="number" />
      <Button  onClick={() => setNumber(3)} text="3" type="number" />
      <Button  onClick={() => setNumber(2)} text="2" type="number" />
      <Button  onClick={() => setNumber(1)} text="1" type="number" />
      <Button  onClick={() => setNumber(0)} text="0" type="number" className="col-span-3" />
      </div>
      <div className="grid grid-cols-1 gap-2">
      <Button onClick={() => clear()} text="c" type="operator" />
        <Button onClick={() => add()} text="+" type="operator" />
        <Button onClick={() => subtract()} text="-" type="operator" />

        <Button onClick={() => total()} text='[=]' type="operator" />
        
      </div>
      </div>
    </div>    
  )
}
    
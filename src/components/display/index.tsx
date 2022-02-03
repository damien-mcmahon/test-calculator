import { FC } from 'react'


export const Display: FC<{value: number}> = ({value}) => (
  <div className="p-8 text-white text-6xl bg-slate-900 w-full text-right">{value} </div>
)
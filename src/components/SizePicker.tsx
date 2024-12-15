import React from 'react'
import { predefinedSize } from '../constant/sidebar'

const SizePicker = () => {
  return (
    <div>
       <h1 className='text-md capitalize py-2'>size :</h1>
       <div className='w-52  flex gap-4 flex-wrap '>
       {predefinedSize.map((size)=>(
        <button className='w-10 h-10 bg-gray-200 rounded-2xl  uppercase
        text-sm'>{size}</button>
       ))}
       </div>
    </div>
  )
}

export default SizePicker
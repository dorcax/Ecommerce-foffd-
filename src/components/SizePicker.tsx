import React from 'react'
import { predefinedSize } from '../constant/sidebar'

type SizePickerProps={
  selectedSize:string
  handleSizeChange:(size:string)=>void
}
const SizePicker = ({handleSizeChange,selectedSize}:SizePickerProps) => {
  return (
    <div>
       <h1 className='text-md capitalize py-2'>size :</h1>
       <div className='w-52  flex gap-4 flex-wrap '>
       {predefinedSize.map((size,index)=>{
        const isSelectedSize =selectedSize===size
        return (
          <button type='button' className={`w-10 h-10   bg-gray-200   rounded-full  uppercase
        text-sm ${isSelectedSize && "bg-red-600"}`}
        onClick={()=>handleSizeChange(size)} key={index}>{size}</button>
        )
        
})}
       </div>
    </div>
  )
}

export default SizePicker
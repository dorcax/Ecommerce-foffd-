import React from 'react'
import { predefinedColor } from '../constant/sidebar'
const ColorPicker = () => {
  return (
    <div>
         <h1 className='text-md capitalize py-2'>colors:</h1>
        <div className='flex gap-4 w-56 flex-wrap'>
            {predefinedColor.map((color,index)=>(
                <div className='w-10 h-10  rounded-2xl border-2 border-gray-200   bg-gray-200 flex items-center justify-center'>
                 <button className={`w-5 h-5 rounded-full   border-2 border-gray-200  ` }
                style={{backgroundColor:color}}
                
                title={color} key={index}>
                      

                </button>
                </div>
              
                

            ))}
        </div>
    </div>
  )
}

export default ColorPicker
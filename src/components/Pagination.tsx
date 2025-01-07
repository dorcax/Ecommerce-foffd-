import React from 'react'

const Pagination = ({totalCount,currentPage}:{totalCount:number, currentPage:number}) => {
  return (
    <div className='flex  items-center justify-between p-4 text-gray-500 border w-full'>
        <button disabled className='py-2 px-4 rounded-md bg-slate-200 capitalize text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>prev</button>
        <div className='flex items-center gap-2 text-sm'>
            <button className='px-2 rounded-sm bg-blue-600'>1</button>
            <button className='px-2 rounded-sm'>1</button>
            <button className='px-2 rounded-sm'>2</button>
            <button className='px-2 rounded-sm'>3</button>
            <button className='px-2 rounded-sm'>...</button>
            <button className='px-2 rounded-sm'></button>
        </div>

        <button  disabled className='py-2 px-4 rounded-md bg-slate-200 capitalize text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>next</button>
    </div>
  )
  
}

export default Pagination
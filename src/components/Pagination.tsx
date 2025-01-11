import React from 'react'
import { useNavigate } from 'react-router-dom';

const Pagination = ({data,page,limit}:{page:number,limit:number,data:any}) => {
 
 
  const navigate = useNavigate();

  const handleNextPage = () => {
    if (data && page < data.totalPages) {
      navigate(`?page=${page + 1}&limit=${limit}`);
    }
  };
  
  const handlePreviousPage = () => {
    if (page > 1) {
      navigate(`?page=${page - 1}&limit=${limit}`);
    }
  };
  

 const renderPageButtons = () => {
  const pageButtons = [];
  for (let i = 1; i <= data?.totalPages; i++) {
    
      pageButtons.push(
        <button
          key={i}
          className={`px-2 rounded-sm ${i === page ? 'bg-blue-600 text-white' : ''}`}
          onClick={() => navigate(`?page=${i}&limit=${limit}`)}
        >
          {i}
        </button>
            );
  
    

  }
  return pageButtons;
};
  return (
    <div className='flex  items-center justify-between p-4 text-gray-500 border w-full'>
        <button  className='py-2 px-4 rounded-md bg-blue-600 text-white capitalize text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed' onClick={handlePreviousPage} disabled={page===1}>prev</button>
        <div className='flex items-center gap-2 text-sm'>
            {renderPageButtons()}
        </div>

        <button   className='py-2 px-4 rounded-md bg-blue-600 text-white capitalize text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed' onClick={handleNextPage} disabled={page===data?.totalPages}>next</button>
    </div>
  )
  
}

export default Pagination
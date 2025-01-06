import React from 'react'
import {useGetStatisticsQuery} from "../Slices/productSlice"
import LineChart from "../components/Line"
const MainDashboard = () => {
  const{data:statistics,isLoading, error }=useGetStatisticsQuery()
  

  return (
    <section className="text-black overflow-hidden">
      <div className="container p-4 ">
        <div>
         {statistics ?(
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
         <div className="border  bg-white shadow-md rounded-lg flex flex-col p-4   ">
          <h2 className="font-semibold capitalize text-md text-gray-700 ">users</h2>
          <p>{statistics.totalUser}</p>
        
         </div>
         <div className="border bg-white p-4 shadow-md  rounded-lg flex flex-col   "> <h2 className="font-semibold capitalize text-md text-gray-700 ">products</h2>
           <p>{statistics.totalProduct}</p>
         </div>
         <div className="border  bg-white shadow-md   p-4 rounded-lg flex flex-col    ">
         <h2 className="font-semibold capitalize text-md text-gray-700 "> categories</h2>
          
          <p>{statistics.totalCategory}</p></div>
         <div className="border  bg-white  p-4 shadow-md  rounded-lg flex flex-col    ">
         <h2 className="font-semibold capitalize text-md text-gray-700 ">orders</h2>
          
         <p>{statistics.totalOrder}</p></div>
          </div>
          
          
       
        
         ):"loading statisitc"}
        </div>
        {/* graph  */}
       <div>
        <LineChart />
       </div>
      </div>

    </section>
  )
}

export default MainDashboard

import React from 'react'
import { JsonToExcel } from "react-json-to-excel";
import {useGetProductsQuery,} from "../../Slices/productSlice.ts";
const DownloadFile = () => {
const { data, error, isLoading } = useGetProductsQuery({ page, limit ,search:searchTerm});
console.log(data)
  return (
    <JsonToExcel
    title="Download as Excel"
    data={data.products}
    fileName="sample-file"
  />
  )
}

export default DownloadFile
import { createApi, fetchBaseQuery, RootState } from "@reduxjs/toolkit/query/react";


export const tagTypes=["Product","Category"] 
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlNGQzZGRlMy03M2QyLTQwMmEtYWZkNC0yMzgwMjI1NGU1MGEiLCJlbWFpbCI6Im9wZXllbWlpYnJhaGltNjY3QGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTczNTI0Njk4NCwiZXhwIjoxNzM1ODUxNzg0fQ.xII8ueLYL-HsH-3hXYdOGicwFe3lczc42Fza7oDSO78";
const baseQuery =fetchBaseQuery({
    baseUrl:"http://localhost:3000",
    prepareHeaders:(headers)=>{
        // const state =getState()
        headers.set("Authorization",` Bearer ${token}`)
     return headers
    },
})


export const api =createApi({
    baseQuery,
    endpoints:(builder)=>({}),
    tagTypes
})
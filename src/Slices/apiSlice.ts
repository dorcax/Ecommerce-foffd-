import { createApi, fetchBaseQuery, RootState } from "@reduxjs/toolkit/query/react";


export const tagTypes=["Product","Category","Order"] 
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3ZWNiMTBiYy1hNGM3LTRmYmUtYmUzNC1mYjEzNTdlN2IwNGUiLCJlbWFpbCI6Im9wZXllbWlpYnJhaGltNjY3QGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTczNTk2Njk0MCwiZXhwIjoxNzM2NTcxNzQwfQ.KKFu3rIdHu41tCwd2QdrCaSm1JrcGEOGyKe6Yb8mUtU";
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
import { createApi, fetchBaseQuery, RootState } from "@reduxjs/toolkit/query/react";


export const tagTypes=["Product","Category","Order"] 
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3ZWNiMTBiYy1hNGM3LTRmYmUtYmUzNC1mYjEzNTdlN2IwNGUiLCJlbWFpbCI6Im9wZXllbWlpYnJhaGltNjY3QGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTczNjQxODc2MywiZXhwIjoxNzM3MDIzNTYzfQ.GZtYNBm4Oel6OLEGzF89WPiiG6V-8ux342i-1TomGnA";
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
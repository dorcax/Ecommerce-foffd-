import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { buildErrorMessage } from "vite";
import { api } from "./apiSlice";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: { id: string; name: string };
  stock: string;
  variant: string;
  imageUrl: string;
  color: string;
};
type Category = {
  id: string;
  imageUrl: string;
  name: string;
};
type ProductData = {
  name: string;
  description: string;
  price: string
  stock: string
  categoryId: string;
  color: string;
  variant: string;
  imageUrl:null
}

export const productSlice = api.injectEndpoints({
 
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: "/product",
      }),
      providesTags: ["Product"],
    }),
    getCategories: builder.query<Category[], void>({
      query: () => ({
        url: "/product/category",
      }),
      providesTags: ["Category"],
    }),
    // get each product
    getProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
      }),
      providesTags: ["Product"],
    }),
    // create a product
    createProduct: builder.mutation<Product, FormData>({
      query: (data) => {
        return {
          url: "/product",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Product"],
    }),
    // update a product
    updateProduct:builder.mutation<Product,{id:string,data:FormData}>({
      query:({id,data})=>({
       url:`/product/${id}`,
       method:"PATCH",
       body:data

      }),
      invalidatesTags:["Product"]
    }),
    deleteProduct:builder.mutation<Product,string>({
      query:(id)=>({
        url:`/product/${id}`,
        method:"DELETE"
      }),
     invalidatesTags:["Product"]
    })
   
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useCreateProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation
} = productSlice;

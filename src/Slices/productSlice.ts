import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { buildErrorMessage } from "vite";
import { api } from "./apiSlice";

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: { id: string; name: string };
  stock: string;
  variant: string;
  imageUrl: null;
  color: string;
};
type Category = {
  id: string;
  imageUrl: null;
  description:string;
  name: string;
};
type ProductData = {
  name: string;
  description: string;
  price: number
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

    getProduct: builder.query<Product, string>({
      query: (id) => ({
        url: `/product/${id}`,
      }),
      providesTags: ["Product"],
    }),

    createProduct: builder.mutation<Product, FormData>({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),

    updateProduct: builder.mutation<Product, { id: string; data: FormData }>({
      query: ({ id, data }) => ({
        url: `/product/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation<Product, string>({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),

    createCategory: builder.mutation<Category, FormData>({
      query: (data) => ({
        url: "/category",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),

    getCategories: builder.query<Category[], void>({
      query: () => ({
        url: "/category",
      }),
      providesTags: ["Category"],
    }),

    getCategory: builder.query<Category, string>({
      query: (id) => ({
        url: `/category/${id}`,
      }),
      providesTags: ["Category"]
    }),


    updateCategory:builder.mutation<Category,{id:string,data:FormData}>({
      query:({id,data})=>({
        url:`/category/${id}`,
        method:"PATCH",
        body:data

      }),
      invalidatesTags: ["Category"],

    }),

    deleteCategory: builder.mutation<Category, string>({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = productSlice;


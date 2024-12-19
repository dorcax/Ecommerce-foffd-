import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { buildErrorMessage } from "vite";

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
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlNGQzZGRlMy03M2QyLTQwMmEtYWZkNC0yMzgwMjI1NGU1MGEiLCJlbWFpbCI6Im9wZXllbWlpYnJhaGltNjY3QGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTczNDU4OTQ2OCwiZXhwIjoxNzM1MTk0MjY4fQ.NSRsxUDnlEG3lmLhJf0Z5734THZHyzFK5l8eETZcrIQ";
export const productSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/product",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
    },
  }),
  tagTypes: ["Product", "Category"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: "/",
      }),
      providesTags: ["Product"],
    }),
    getCategories: builder.query<Category[], void>({
      query: () => ({
        url: "/category",
      }),
      providesTags: ["Category"],
    }),
    // get each product
    getProduct: builder.query({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: ["Product"],
    }),
    createProduct: builder.mutation<Product, FormData>({
      query: (data) => {
        return {
          url: "/",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useCreateProductMutation,
  useGetProductQuery,
} = productSlice;

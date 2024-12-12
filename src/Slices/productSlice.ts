import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlNGQzZGRlMy03M2QyLTQwMmEtYWZkNC0yMzgwMjI1NGU1MGEiLCJlbWFpbCI6Im9wZXllbWlpYnJhaGltNjY3QGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTczNDAwNjkxNiwiZXhwIjoxNzM0MDkzMzE2fQ.19X29Hh9IZSvtnm5CAssJhHZ0N1cFJIvXre9Lyg_pRw";
export const productSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
    },
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: "/product",
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery } = productSlice;

import { configureStore } from "@reduxjs/toolkit";

import { productSlice } from "./Slices/productSlice.ts";

export const store = configureStore({
  reducer: { [productSlice.reducerPath]: productSlice.reducer },
  middleware: (getDefaultmMiddleware) =>
    getDefaultmMiddleware().concat(productSlice.middleware),
});

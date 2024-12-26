import { configureStore } from "@reduxjs/toolkit";


import { api } from "./Slices/apiSlice.ts";

export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefaultmMiddleware) =>
    getDefaultmMiddleware().concat(api.middleware),
  devTools:true
});

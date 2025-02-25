import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    productSlice: productReducer,
  },
});

export default store;
const { configureStore } = require("@reduxjs/toolkit");
import productsReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    productItems: productsReducer,
  },
});
export default store;

const { createSlice } = require("@reduxjs/toolkit");

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    cart: {},
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.cart[id]) {
        state.cart[id] = (state.cart[id] || 0) + 1;
      }
    },
  },
});
export const { setProducts, addToCart } = productsSlice.actions;
export default productsSlice.reducer;

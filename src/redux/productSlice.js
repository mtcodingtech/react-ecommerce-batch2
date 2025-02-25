import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
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
      state.cart[id] = (state.cart[id] || 0) + 1; // Increment if exists, else set to 1
    },
  
    increaseQuantity: (state, action) => {
      const id = action.payload;
      if (state.cart[id]) {
        state.cart[id] += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      if (state.cart[id] > 1) {
        state.cart[id] -= 1;
      } else {
        delete state.cart[id]; // Remove from cart if 0
      }
    },
    removeFromCart: (state, action) => {
      delete state.cart[action.payload];
    },
    clearCart: (state) => {
      state.cart = {};
    },
  },
});

export const { setProducts, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

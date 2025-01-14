import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    // In your cartSlice.js (Redux Slice)
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        // Ensure that the quantity is initialized to 1
        state.cartItems.push({ ...action.payload, quantity: 1 });
        alert("Item added successfully");
      } else {
        alert("Item already in cart");
      }
    },

    increment(state, action) {
      const item = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += 1; // Increase the quantity
      }
    },

    decrement(state, action) {
      const item = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1; // Decrease the quantity but prevent it from going below 1
      }
    },

    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { addToCart, removeItem, increment, decrement } =
  cartSlice.actions;
export default cartSlice.reducer;

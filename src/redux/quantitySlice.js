// quantitySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantities: {}, // Store quantities for each product by name
};

const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    increment: (state, action) => {
      const productName = action.payload;
      if (state.quantities[productName]) {
        state.quantities[productName] += 1;
      } else {
        state.quantities[productName] = 1;
      }
    },
    decrement: (state, action) => {
      const productName = action.payload;
      if (state.quantities[productName] > 1) {
        state.quantities[productName] -= 1;
      }
    },
    setQuantity: (state, action) => {
      const { productName, quantity } = action.payload;
      state.quantities[productName] = quantity;
    },
  },
});

export const { increment, decrement, setQuantity } = quantitySlice.actions;
export default quantitySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// class CartItem {
//   constructor(product) {
//     this.count = 1;
//     this.product = product;
//   }
// }

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    incrementItemCount: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.count += 1;
      }
    },
    decrementItemCount: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.count > 1) {
          item.count -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload.id);
        }
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  incrementItemCount,
  decrementItemCount,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Cart items
  favorites: [], // List of favorite product IDs
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
    toggleFavorite: (state, action) => {
      const productId = action.payload;
      if (state.favorites.includes(productId)) {
        state.favorites = state.favorites.filter((id) => id !== productId);
      } else {
        state.favorites.push(productId);
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
  toggleFavorite,
  incrementItemCount,
  decrementItemCount,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

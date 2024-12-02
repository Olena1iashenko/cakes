import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  selectedCategory: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSearchQuery, setSelectedCategory } = filterSlice.actions;
export default filterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import actGetItems from "./actGetItems";

const productsInfoSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: "idel",
    error: null,
  },
  reducers: {
    resetProducts: (state) => {
      state.products = [];
      state.loading = "idel";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actGetItems.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actGetItems.fulfilled, (state, action) => {
        state.loading = "success";
        state.products = action.payload;
      })
      .addCase(actGetItems.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.payload;
      });
  },
});

export const { resetProducts } = productsInfoSlice.actions;
export default productsInfoSlice.reducer;

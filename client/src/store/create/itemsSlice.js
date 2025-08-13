import { createSlice } from "@reduxjs/toolkit";
import actPostItem from "./actpostItems";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    loading: "idel",
    error: null,
  },
  reducers: {
    resetItems: (state) => {
      state.items = [];
      state.loading = "idel";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actPostItem.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actPostItem.fulfilled, (state, action) => {
        state.loading = "success";
        state.items.push(action.payload);
      })
      .addCase(actPostItem.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.payload;
      });
  },
});

export const { resetItems } = itemsSlice.actions;
export default itemsSlice.reducer;

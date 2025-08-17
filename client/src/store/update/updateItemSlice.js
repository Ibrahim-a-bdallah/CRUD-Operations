import { createSlice } from "@reduxjs/toolkit";
import actUpdateItem from "./actUpdateItem";

const updateItemSlice = createSlice({
  name: "UpdateItem",
  initialState: {
    items: [],
    loading: "idel",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actUpdateItem.pending, (state) => {
        state.items = [];
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actUpdateItem.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = "success";
      })
      .addCase(actUpdateItem.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.payload;
      });
  },
});

export default updateItemSlice.reducer;

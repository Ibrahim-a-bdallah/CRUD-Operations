import { createSlice } from "@reduxjs/toolkit";
import actUpdateItem from "./actUpdateItem";

const updateItemSlice = createSlice({
  name: "UpdateItem",
  initialState: {
    loading: "idel",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actUpdateItem.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actUpdateItem.fulfilled, (state) => {
        state.loading = "success";
      })
      .addCase(actUpdateItem.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.payload;
      });
  },
});

export default updateItemSlice.reducer;

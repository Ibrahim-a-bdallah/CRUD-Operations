import { createSlice } from "@reduxjs/toolkit";
import actDeleteItems from "./actDeleteItems";

const deleteItemSlice = createSlice({
  name: "deleteItem",
  initialState: {
    loading: "idel",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actDeleteItems.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actDeleteItems.fulfilled, (state) => {
        state.loading = "success";
      })
      .addCase(actDeleteItems.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.payload;
      });
  },
});

export default deleteItemSlice.reducer;

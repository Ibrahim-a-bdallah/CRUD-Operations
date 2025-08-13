import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  type: "add",
};

const moduleSlice = createSlice({
  name: "module",
  initialState,
  reducers: {
    openModule(state, action) {
      state.open = true;
      state.type = action.payload.type || "add"; // Default to "add" if no type is provided
    },
    closeModule(state) {
      state.type = "add"; // Reset type to default when closing
      state.open = false;
    },
  },
});
export const { openModule, closeModule } = moduleSlice.actions;
export default moduleSlice.reducer;

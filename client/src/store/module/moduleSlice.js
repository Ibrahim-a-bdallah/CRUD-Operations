import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const moduleSlice = createSlice({
  name: "module",
  initialState,
  reducers: {
    openModule(state) {
      state.open = true;
    },
    closeModule(state) {
      state.open = false;
    },
  },
});
export const { openModule, closeModule } = moduleSlice.actions;
export default moduleSlice.reducer;

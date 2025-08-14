import api from "@/utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

const actGetItems = createAsyncThunk(
  "actGetItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/items");

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export default actGetItems;

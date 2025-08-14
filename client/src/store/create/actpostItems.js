import api from "@/utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
const actPostItem = createAsyncThunk(
  "actPostItem",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post(`/api/items`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actPostItem;

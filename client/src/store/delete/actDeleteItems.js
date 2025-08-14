import api from "@/utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

const actDeleteItems = createAsyncThunk(
  "actDeleteItems",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/api/items/${id}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actDeleteItems;

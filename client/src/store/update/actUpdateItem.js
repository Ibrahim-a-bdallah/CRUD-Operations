import api from "@/utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

const actUpdateItem = createAsyncThunk(
  "actUpdateItem",
  async ({ data, id }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/items/${id}`, data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actUpdateItem;

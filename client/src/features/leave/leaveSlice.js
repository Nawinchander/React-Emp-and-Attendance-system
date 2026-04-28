import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

export const fetchLeaves = createAsyncThunk("leave/fetchLeaves", async () => {
  const response = await api.get("/leaves");
  return response.data;
});

const leaveSlice = createSlice({
  name: "leave",
  initialState: {
    leaves: [],
    loading: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaves.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLeaves.fulfilled, (state, action) => {
        state.leaves = action.payload;
        state.loading = false;
      });
  }
});

export default leaveSlice.reducer;
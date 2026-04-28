import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      id: 1,
      name: "Nawin",
      role: "employee"
    }
  },
  reducers: {}
});

export default authSlice.reducer;


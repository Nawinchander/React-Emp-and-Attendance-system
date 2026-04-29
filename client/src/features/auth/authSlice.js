import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    }
  }
});

export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: {
//       id: 1,
//       name: "Nawin",
//       role: "employee"
//     }
//   },
//   reducers: {}
// });

// export default authSlice.reducer;


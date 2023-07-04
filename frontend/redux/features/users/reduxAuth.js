import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: Cookies.get("user") || null,
    access: Cookies.get("token") || null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user_name, access } = action.payload;
      state.user = user_name;
      state.token = access;
    },
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut, setCurrentUser } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentAccessToken = (state) => state.auth.token;

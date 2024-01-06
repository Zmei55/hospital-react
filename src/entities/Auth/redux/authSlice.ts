import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser, TAuthState, TUserLoginRes } from "entities/User";

const initialState: TAuthState = {
  user: {
    _id: null,
    username: null,
    name: null,
    department: null,
    workplaces: null,
    position: null,
    roles: null,
  },
  token: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<TUserLoginRes>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logoutSuccess: state => {
      state.user = initialState.user;
      state.token = "";
      state.isLoggedIn = false;
    },
    refreshUser: (state, action: PayloadAction<{ user: TUser }>) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
  },
});

export const { loginSuccess, logoutSuccess, refreshUser } = authSlice.actions;

export default authSlice.reducer;

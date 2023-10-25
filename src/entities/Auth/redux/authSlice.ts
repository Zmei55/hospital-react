import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "entities/User";

interface IUserState {
  user: IUser;
  token: string;
  isLoggedIn: boolean;
}

const initialState: IUserState = {
  user: {
    name: "",
    username: "",
    workplace: "",
  },
  token: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logoutSuccess: state => {
      state.user = initialState.user;
      state.token = "";
      state.isLoggedIn = false;
    },
    refreshUser: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
  },
});

export const { loginSuccess, logoutSuccess, refreshUser } = authSlice.actions;

export default authSlice.reducer;

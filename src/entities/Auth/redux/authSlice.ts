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
    position: "",
  },
  token: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ user: IUser; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logoutSuccess: state => {
      state.user = initialState.user;
      state.token = "";
      state.isLoggedIn = false;
    },
    refreshUser: (state, action: PayloadAction<{ user: IUser }>) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
  },
});

export const { loginSuccess, logoutSuccess, refreshUser } = authSlice.actions;

export default authSlice.reducer;

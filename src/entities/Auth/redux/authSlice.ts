import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAction } from "entities/Auth";
import { IUserState } from "entities/User";

const initialState: IUserState = {
  user: {
    name: "",
    logName: "",
    station: "",
  },
  token: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<IAction>) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
    },
    logoutSuccess: state => {
      state.user = { name: "", logName: "", station: "" };
      state.token = "";
      state.isLoggedIn = false;
    },
    refreshUser: (state, action: PayloadAction<IAction>) => {
      state.user = action.payload.data.user;
      state.isLoggedIn = true;
    },
  },
});

export const { loginSuccess, logoutSuccess, refreshUser } = authSlice.actions;

export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TUser = {
  name: string;
  logName: string;
  station: string;
};

type TUserState = {
  user: TUser;
  token: string;
  isLoggedIn: boolean;
};

type TAction = {
  data: TUserState;
};

const initialState: TUserState = {
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
    loginSuccess: (state, action: PayloadAction<TAction>) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
    },
    logoutSuccess: state => {
      state.user = { name: "", logName: "", station: "" };
      state.token = "";
      state.isLoggedIn = false;
    },
    refreshUser: (state, action: PayloadAction<TAction>) => {
      state.user = action.payload.data.user;
      state.isLoggedIn = true;
    },
  },
});

export const { loginSuccess, logoutSuccess, refreshUser } = authSlice.actions;

export default authSlice.reducer;

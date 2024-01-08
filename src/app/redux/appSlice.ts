import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAppState } from "app";

const initialState: TAppState = {
  appTitle: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addAppTitle(state, action: PayloadAction<string>) {
      state.appTitle = action.payload;
    },
  },
});

export const { addAppTitle } = appSlice.actions;

export default appSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAppState } from "app";

const initialState: TAppState = {
  appTitle: "Hospital",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addAppTitle(state, action: PayloadAction<string>) {
      state.appTitle = action.payload;
    },
    resetAppTitle(state) {
      state.appTitle = initialState.appTitle;
    },
  },
});

export const { addAppTitle, resetAppTitle } = appSlice.actions;

export default appSlice.reducer;

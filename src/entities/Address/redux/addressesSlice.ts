import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAddress, TAddressState } from "entities/Address";

const initialState: TAddressState = {
  address: null,
};

const addressesSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    addAddress(state, action: PayloadAction<TAddress>) {
      state.address = action.payload;
    },
    deleteAddress(state) {
      state.address = initialState.address;
    },
  },
});

export const { addAddress, deleteAddress } = addressesSlice.actions;

export default addressesSlice.reducer;

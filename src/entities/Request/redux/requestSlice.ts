import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TRequestSlice, TDetails } from "entities/Request";

const initialState: TRequestSlice = {
  _id: null,
  requestNumber: null,
  requestDetails: null,
};

const requestSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    addRequestId(state, action: PayloadAction<string | number>) {
      state._id = action.payload;
    },
    resetRequestId(state) {
      state._id = initialState._id;
    },
    addRequestDBCount(state, action: PayloadAction<number>) {
      state.requestNumber = action.payload;
    },
    resetRequestDBCount(state) {
      state.requestNumber = initialState.requestNumber;
    },
    addRequestDetails(state, action: PayloadAction<TDetails[]>) {
      state.requestDetails = action.payload;
    },
    resetRequestDetails(state) {
      state.requestDetails = initialState.requestDetails;
    },
  },
});

export const {
  addRequestId,
  resetRequestId,
  addRequestDBCount,
  resetRequestDBCount,
  addRequestDetails,
  resetRequestDetails,
} = requestSlice.actions;

export default requestSlice.reducer;

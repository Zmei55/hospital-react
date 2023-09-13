import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDetail } from "entities/Service";

interface IRequestSlice {
  requestId: string;
  requestNumber: number;
  requestDetails: IDetail[];
}

const initialState: IRequestSlice = {
  requestId: "",
  requestNumber: 0,
  requestDetails: [],
};

const requestSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    addRequestId(state, action: PayloadAction<string>) {
      state.requestId = action.payload;
    },
    resetRequestId(state) {
      state.requestId = initialState.requestId;
    },
    addRequestDBCount(state, action: PayloadAction<number>) {
      state.requestNumber = action.payload;
    },
    resetRequestDBCount(state) {
      state.requestNumber = initialState.requestNumber;
    },
    addRequestDetails(state, action: PayloadAction<IDetail[]>) {
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

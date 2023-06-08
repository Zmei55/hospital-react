import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IRequestDetails } from "entities/Request";
import { IDetail } from "entities/Service";

interface IRequestSlice {
  requestNumber: number;
  patientId: string;
  requestDetails: IDetail[];
}

const initialState: IRequestSlice = {
  requestNumber: 0,
  patientId: "",
  requestDetails: [],
};

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    fetchRequestsDBCount(state, action: PayloadAction<number>) {
      state.requestNumber = action.payload;
    },
    addRequestPatientID(state, action: PayloadAction<string>) {
      state.patientId = action.payload;
    },
    addRequestDetails(state, action: PayloadAction<IDetail[]>) {
      state.requestDetails = action.payload;
    },
  },
});

export const { fetchRequestsDBCount, addRequestPatientID, addRequestDetails } =
  requestSlice.actions;

export default requestSlice.reducer;

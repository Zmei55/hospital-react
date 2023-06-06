import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRequestDetails } from "entities/Request";
// import { IService } from "entities/Service";

interface IRequestSlice {
  requestNumber: number;
  patientId: string;
  requestDetails: IRequestDetails[];
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
    fetchRequestDetails(state, action) {
      state.requestDetails.push(action.payload.data);
    },
  },
});

export const {
  fetchRequestsDBCount,
  addRequestPatientID,
  fetchRequestDetails,
} = requestSlice.actions;

export default requestSlice.reducer;

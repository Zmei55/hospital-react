import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAction } from "app/types";

const initialState = {
  patient: {
    _id: "",
    name: "",
    birthDate: "",
    cardNumber: 0,
    gender: "",
    phoneNumber: "",
    email: "",
    identityDocument: "",
    residenceAddress: {
      street: "",
      houseNumber: "",
      city: "",
      postcode: "",
    },
    services: [],
    containers: [],
  },
  isActivePatientInfo: false,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    fetchIsActivePatientInfo(state, action: PayloadAction<boolean>) {
      state.isActivePatientInfo = action.payload;
    },
    fetchPatient(state, action: PayloadAction<IAction>) {
      state.patient = action.payload.data.result;
    },
  },
});

export const { fetchIsActivePatientInfo, fetchPatient } = appSlice.actions;

export default appSlice.reducer;

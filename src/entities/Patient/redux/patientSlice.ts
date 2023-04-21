import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActionSlice } from "entities/Patient";

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

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    fetchIsActivePatientInfo(state, action: PayloadAction<boolean>) {
      state.isActivePatientInfo = action.payload;
    },
    fetchPatient(state, action: PayloadAction<IActionSlice>) {
      state.patient = action.payload.data.result;
    },
  },
});

export const { fetchIsActivePatientInfo, fetchPatient } = patientSlice.actions;

export default patientSlice.reducer;

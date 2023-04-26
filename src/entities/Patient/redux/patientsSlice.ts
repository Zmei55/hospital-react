import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPatient, IActionSlice, IActionPatients } from "entities/Patient";

interface IPatientsState {
  patients: IPatient[];
  patient: IPatient;
  isActiveInfo: boolean;
  modal: boolean;
}

const initialState: IPatientsState = {
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
  patients: [],
  isActiveInfo: false,
  modal: false,
};

const patientsListSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    fetchPatientById(state, action: PayloadAction<IActionPatients>) {
      state.patient = action.payload.data.data.result;
    },
    fetchPatient(state, action: PayloadAction<IActionSlice>) {
      state.patient = action.payload.data.result;
    },
    fetchPatientByName(state, action) {
      state.patients = action.payload.data.data.result;
    },
    resetPatientsList(state, action: PayloadAction<[]>) {
      state.patients = action.payload;
    },
    fetchIsActiveInfo(state, action: PayloadAction<boolean>) {
      state.isActiveInfo = action.payload;
    },
    fetchPatientsModal(state, action: PayloadAction<boolean>) {
      state.modal = action.payload;
    },
  },
});

export const {
  fetchPatientById,
  fetchPatient,
  fetchPatientByName,
  resetPatientsList,
  fetchIsActiveInfo,
  fetchPatientsModal,
} = patientsListSlice.actions;

export default patientsListSlice.reducer;

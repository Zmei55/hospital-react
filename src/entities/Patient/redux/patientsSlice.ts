import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPatient } from "entities/Patient";

interface IPatientsState {
  patients: IPatient[];
  patient: IPatient;
  isActiveInfo: boolean;
  modalPatient: boolean;
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
  },
  patients: [],
  isActiveInfo: false,
  modalPatient: false,
};

const patientsListSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    addPatient(state, action: PayloadAction<IPatient>) {
      state.patient = action.payload;
    },
    deletePatient(state) {
      state.patient = initialState.patient;
    },
    addPatientsList(state, action) {
      state.patients = action.payload.data;
    },
    resetPatientsList(state) {
      state.patients = initialState.patients;
    },
    fetchIsActiveInfo(state, action: PayloadAction<boolean>) {
      state.isActiveInfo = action.payload;
    },
    fetchPatientsModal(state, action: PayloadAction<boolean>) {
      state.modalPatient = action.payload;
    },
  },
});

export const {
  addPatient,
  deletePatient,
  addPatientsList,
  resetPatientsList,
  fetchIsActiveInfo,
  fetchPatientsModal,
} = patientsListSlice.actions;

export default patientsListSlice.reducer;

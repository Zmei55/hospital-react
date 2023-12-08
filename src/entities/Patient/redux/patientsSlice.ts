import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPatient } from "entities/Patient";

interface IPatientsState {
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
    address: {
      street: "",
      houseNumber: 0,
      city: "",
      postcode: 0,
    },
  },
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
  fetchIsActiveInfo,
  fetchPatientsModal,
} = patientsListSlice.actions;

export default patientsListSlice.reducer;

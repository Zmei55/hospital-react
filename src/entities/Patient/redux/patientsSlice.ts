import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPatient, TPatientsState } from "entities/Patient";

const initialState: TPatientsState = {
  patient: null,
  isActiveInfo: false,
  modalPatient: false,
};

const patientsListSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    addPatient(state, action: PayloadAction<TPatient>) {
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

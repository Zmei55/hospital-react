import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPatientsState, IActionPatientsList } from "entities/Patient";

const initialState: IPatientsState = {
  patients: [],
};

const patientsListSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    fetchPatientById(state, action: PayloadAction<IActionPatientsList>) {
      state.patients = action.payload.data.data.result;
    },
    fetchPatientByName(state, action) {
      state.patients = action.payload.data.data.result;
    },
    resetPatientsList(state, action: PayloadAction<[]>) {
      state.patients = action.payload;
    },
  },
});

export const { fetchPatientById, fetchPatientByName, resetPatientsList } =
  patientsListSlice.actions;

export default patientsListSlice.reducer;

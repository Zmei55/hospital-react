import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPatientState, IAction } from "entities/Patient";

const initialState: IPatientState = {
  patients: [],
};

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    fetchPatientById(state, action: PayloadAction<IAction>) {
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
  patientsSlice.actions;

export default patientsSlice.reducer;

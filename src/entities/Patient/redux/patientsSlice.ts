import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TPatient = {
  _id: string;
  name: string;
  birthDate: string;
  cardNumber: number;
  gender: string;
  phoneNumber: string;
  email: string;
  identityDocument: string;
  residenceAddress: {
    street: string;
    houseNumber: string;
    city: string;
    postcode: string;
  };
  services: [];
  containers: [];
};

type TPatientState = {
  patients: TPatient[];
};

type TAction = {
  data: {
    data: {
      result: TPatient[];
    };
  };
};

const initialState: TPatientState = {
  patients: [],
};

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    fetchPatientById(state, action: PayloadAction<TAction>) {
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

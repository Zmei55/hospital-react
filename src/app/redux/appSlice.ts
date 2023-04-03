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
  services: never[];
  containers: never[];
};

type TAction = {
  data: {
    result: TPatient;
  };
};

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
    fetchPatient(state, action: PayloadAction<TAction>) {
      state.patient = action.payload.data.result;
    },
  },
});

export const { fetchIsActivePatientInfo, fetchPatient } = appSlice.actions;

export default appSlice.reducer;

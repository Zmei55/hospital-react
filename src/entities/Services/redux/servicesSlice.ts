import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IServicesState, IService } from "entities/Services";

const initialState: IServicesState = {
  services: [],
  modal: false,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    fetchServices(state, action: PayloadAction<IService[]>) {
      state.services = action.payload;
    },
    fetchServicesModal(state, action: PayloadAction<boolean>) {
      state.modal = action.payload;
    },
    fetchLaborModal(state, action: PayloadAction<boolean>) {
      state.modal = action.payload;
    },
  },
});

export const { fetchServices, fetchServicesModal } = servicesSlice.actions;

export default servicesSlice.reducer;

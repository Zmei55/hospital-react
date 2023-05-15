import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IServicesState, IService } from "entities/Services";

const initialState: IServicesState = {
  services: [],
  modalService: false,
  modalLabor: false,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    fetchServices(state, action: PayloadAction<IService[]>) {
      state.services = action.payload;
    },
    fetchServicesModal(state, action: PayloadAction<boolean>) {
      state.modalService = action.payload;
    },
    fetchLaborModal(state, action: PayloadAction<boolean>) {
      state.modalLabor = action.payload;
    },
  },
});

export const { fetchServices, fetchServicesModal, fetchLaborModal } =
  servicesSlice.actions;

export default servicesSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IService } from "entities/Service";

interface IServicesState {
  services: IService[];
  filteredServices: IService[];
  modalService: boolean;
}

const initialState: IServicesState = {
  services: [],
  filteredServices: [],
  modalService: false,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    fetchServices(state, action) {
      state.services = action.payload.data;
    },
    fetchFilteredServices(state, action) {
      state.filteredServices = action.payload.data;
    },
    fetchServicesModal(state, action: PayloadAction<boolean>) {
      state.modalService = action.payload;
    },
  },
});

export const { fetchServices, fetchFilteredServices, fetchServicesModal } =
  servicesSlice.actions;

export default servicesSlice.reducer;

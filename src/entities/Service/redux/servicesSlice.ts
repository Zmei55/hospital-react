import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILabor, IService, IDetail } from "entities/Service";

interface IServicesState {
  services: IService[];
  labors: ILabor[];
  details: IDetail[];
  selectedServices: IService[];
  modalService: boolean;
  modalLabor: boolean;
}

const initialState: IServicesState = {
  services: [],
  labors: [],
  details: [],
  selectedServices: [],
  modalService: false,
  modalLabor: false,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    addServices(state, action: PayloadAction<IService[]>) {
      state.services = action.payload;
    },
    deleteService(state, action: PayloadAction<string>) {
      state.services = state.services.filter(
        service => service._id !== action.payload
      );
    },
    resetServices(state) {
      state.services = initialState.services;
    },
    addSelectedServices(state, action: PayloadAction<IService>) {
      state.selectedServices.push(action.payload);
    },
    deleteSelectedService(state, action: PayloadAction<string>) {
      state.selectedServices = state.selectedServices.filter(
        service => service._id !== action.payload
      );
    },
    resetSelectedServices(state) {
      state.selectedServices = initialState.selectedServices;
    },
    fetchServicesModal(state, action: PayloadAction<boolean>) {
      state.modalService = action.payload;
    },
    fetchLabors(state, action: PayloadAction<ILabor[]>) {
      state.labors = action.payload;
    },
    resetLabors(state) {
      state.labors = initialState.labors;
    },
    addDetails(state, action: PayloadAction<IDetail[]>) {
      state.details = action.payload;
    },
    deleteDetail(state, action: PayloadAction<string>) {
      state.details = state.details.filter(
        detail => detail.serviceId !== action.payload
      );
    },
    resetDetails(state) {
      state.details = initialState.details;
    },
    fetchLaborModal(state, action: PayloadAction<boolean>) {
      state.modalLabor = action.payload;
    },
  },
});

export const {
  addServices,
  deleteService,
  resetServices,
  addSelectedServices,
  deleteSelectedService,
  resetSelectedServices,
  fetchServicesModal,
  fetchLabors,
  resetLabors,
  addDetails,
  deleteDetail,
  resetDetails,
  fetchLaborModal,
} = servicesSlice.actions;

export default servicesSlice.reducer;

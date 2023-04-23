import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IServicesState, IService } from "entities/Services";

// interface IAction {
//   services: [];
// }

const initialState: IServicesState = {
  services: [],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    fetchServices(state, action: PayloadAction<IService[]>) {
      state.services = action.payload;
    },
  },
});

export const { fetchServices } = servicesSlice.actions;

export default servicesSlice.reducer;

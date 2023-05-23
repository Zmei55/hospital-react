import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILabor } from "entities/Labor";

interface ILaborState {
  labors: ILabor[];
  modalLabor: boolean;
}

const initialState: ILaborState = {
  labors: [],
  modalLabor: false,
};

const laborsSlice = createSlice({
  name: "labors",
  initialState,
  reducers: {
    fetchLabors(state, action) {
      state.labors = action.payload;
    },
    fetchLaborModal(state, action: PayloadAction<boolean>) {
      state.modalLabor = action.payload;
    },
  },
});

export const { fetchLabors, fetchLaborModal } = laborsSlice.actions;

export default laborsSlice.reducer;

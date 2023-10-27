import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "entities/User";

interface IUserState {
  user: IUser;
  modalUser: boolean;
}

const initialState: IUserState = {
  user: {
    _id: "",
    username: "",
    name: "",
    workplace: "",
  },
  modalUser: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    deleteUser(state) {
      state.user = initialState.user;
    },
    fetchUserModal(state, action: PayloadAction<boolean>) {
      state.modalUser = action.payload;
    },
  },
});

export const { addUser, deleteUser, fetchUserModal } = userSlice.actions;

export default userSlice.reducer;

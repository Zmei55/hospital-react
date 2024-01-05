import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser, TUserState } from "entities/User";

const initialState: TUserState = {
  user: {
    _id: null,
    username: null,
    name: null,
    department: null,
    workplaces: null,
    position: null,
    roles: null,
  },
  modalUser: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<TUser>) {
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

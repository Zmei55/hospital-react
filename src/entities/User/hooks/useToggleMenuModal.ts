import { fetchUserModal } from "entities/User";
import { useAppDispatch, useAppSelector } from "shared";

export const useToggleMenuModal = () => {
  const dispatch = useAppDispatch();
  const showModal: boolean = useAppSelector(state => state.user.modalUser);

  const toggleMenuModal = () => {
    dispatch(fetchUserModal(!showModal));
  };

  return { toggleMenuModal };
};

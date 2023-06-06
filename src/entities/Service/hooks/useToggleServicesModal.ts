import { fetchServicesModal } from "entities/Service";
import { useAppDispatch, useAppSelector } from "shared";

export const useToggleServicesModal = () => {
  const dispatch = useAppDispatch();
  const showServiceModal = useAppSelector(state => state.services.modalService);

  const toggleServicesModal = () => {
    dispatch(fetchServicesModal(!showServiceModal));
  };

  return { showServiceModal, toggleServicesModal };
};

import { fetchLaborModal } from "entities/Service";
import { useAppDispatch, useAppSelector } from "shared";

export const useToggleLaborModal = () => {
  const dispatch = useAppDispatch();
  const showLaborModal = useAppSelector(state => state.services.modalLabor);

  const toggleLaborModal = () => {
    dispatch(fetchLaborModal(!showLaborModal));
  };

  return { showLaborModal, toggleLaborModal };
};

import { fetchPatientsModal } from "entities/Patient";
import { useAppDispatch, useAppSelector } from "shared";

export const useTogglePatientsModal = () => {
  const dispatch = useAppDispatch();
  const showModal: boolean = useAppSelector(
    state => state.patients.modalPatient
  );

  const togglePatientsModal = () => {
    dispatch(fetchPatientsModal(!showModal));
  };

  return { togglePatientsModal };
};

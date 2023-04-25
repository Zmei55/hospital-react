import { useEffect } from "react";
import { fetchPatientsModal } from "entities/Patient";
import { useAppDispatch, useAppSelector, useToggle } from "shared";

export const useTogglePatientsModal = () => {
  const dispatch = useAppDispatch();
  const initialValue: boolean = useAppSelector(state => state.patients.modal);
  const [showModal, toggleModal] = useToggle(initialValue);

  useEffect(() => {
    dispatch(fetchPatientsModal(showModal));
  }, [dispatch, showModal]);

  return { showModal, toggleModal };
};

import { useEffect } from "react";
import { fetchServicesModal } from "entities/Services";
import { useAppDispatch, useAppSelector, useToggle } from "shared";

export const useToggleServicesModal = () => {
  const dispatch = useAppDispatch();
  const initialValue: boolean = useAppSelector(state => state.services.modal);
  const [showModal, toggleModal] = useToggle(initialValue);

  useEffect(() => {
    dispatch(fetchServicesModal(showModal));
  }, [dispatch, showModal]);

  return { showModal, toggleModal };
};

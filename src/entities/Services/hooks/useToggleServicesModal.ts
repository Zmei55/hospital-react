import { useEffect } from "react";
import { fetchServicesModal } from "entities/Services";
import { useAppDispatch, useToggle } from "shared";

export const useToggleServicesModal = (initialValue: boolean) => {
  const dispatch = useAppDispatch();
  const [showModal, toggleModal] = useToggle(initialValue);

  useEffect(() => {
    dispatch(fetchServicesModal(showModal));
  }, [dispatch, showModal]);

  return { showModal, toggleModal };
};

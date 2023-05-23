import { useEffect } from "react";
import { fetchServicesModal } from "entities/Service";
import { useAppDispatch, useAppSelector, useToggle } from "shared";

export const useToggleServicesModal = () => {
  const dispatch = useAppDispatch();
  const initialValue: boolean = useAppSelector(
    state => state.services.modalService
  );
  const [showServicesModal, toggleServicesModal] = useToggle(initialValue);

  useEffect(() => {
    dispatch(fetchServicesModal(showServicesModal));
  }, [dispatch, showServicesModal]);

  return { showServicesModal, toggleServicesModal };
};

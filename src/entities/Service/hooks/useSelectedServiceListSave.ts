import { addServices, useToggleServicesModal } from "entities/Service";
import { useAppDispatch, useAppSelector } from "shared";

export const useSelectedServiceListSave = () => {
  const dispatch = useAppDispatch();
  const selectedServiceList = useAppSelector(
    state => state.services.selectedServices
  );
  const { toggleServicesModal } = useToggleServicesModal();

  const saveSelectedList = () => {
    dispatch(addServices(selectedServiceList));
    toggleServicesModal();
  };

  return { saveSelectedList };
};

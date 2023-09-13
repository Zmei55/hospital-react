import {
  addServices,
  useToggleServicesModal,
  useGetLaborsList,
} from "entities/Service";
import { useAppDispatch, useAppSelector } from "shared";

export const useSelectedServiceListSave = () => {
  const dispatch = useAppDispatch();
  const selectedServiceList = useAppSelector(
    state => state.services.selectedServices
  );
  const { fetchLaborList } = useGetLaborsList();
  const { toggleServicesModal } = useToggleServicesModal();

  const saveSelectedList = () => {
    dispatch(addServices(selectedServiceList));
    fetchLaborList();
    toggleServicesModal();
  };

  return { saveSelectedList };
};

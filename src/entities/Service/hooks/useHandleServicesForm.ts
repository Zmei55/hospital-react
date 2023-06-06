import {
  useClearServicesFilterState,
  useGetLaborsList,
  useToggleServicesModal,
  addServices,
} from "entities/Service";
import { useAppDispatch, useAppSelector } from "shared";

export const useHandleServicesForm = () => {
  const dispatch = useAppDispatch();
  const selectedServices = useAppSelector(
    state => state.services.selectedServices
  );
  const { fetchLaborsList } = useGetLaborsList();
  const { toggleServicesModal } = useToggleServicesModal();
  const { clearServicesFilterState } = useClearServicesFilterState();

  const handleServicesForm: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    dispatch(addServices(selectedServices));
    fetchLaborsList();
    toggleServicesModal();
    clearServicesFilterState();
  };

  return { handleServicesForm };
};

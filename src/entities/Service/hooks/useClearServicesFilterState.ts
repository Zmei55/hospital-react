import { resetFilteredServices } from "entities/Service";
import { useAppDispatch } from "shared";

export const useClearServicesFilterState = () => {
  const dispatch = useAppDispatch();

  const clearServicesFilterState = () => {
    dispatch(resetFilteredServices());
  };

  return { clearServicesFilterState };
};

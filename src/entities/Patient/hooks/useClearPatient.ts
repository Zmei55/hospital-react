import { useAppDispatch } from "shared";
import { deletePatient, resetPatientsList } from "entities/Patient";
import {
  resetServices,
  resetSelectedServices,
  resetLabors,
  resetDetails,
  resetFilteredServices,
} from "entities/Service";

export const useClearPatient = () => {
  const dispatch = useAppDispatch();

  const clearPatient = (): void => {
    dispatch(deletePatient());
    dispatch(resetSelectedServices());
    dispatch(resetServices());
    dispatch(resetPatientsList());
    dispatch(resetLabors());
    dispatch(resetDetails());
    dispatch(resetFilteredServices());
  };

  return { clearPatient };
};

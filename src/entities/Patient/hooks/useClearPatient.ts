import { useAppDispatch } from "shared";
import {
  fetchPatient,
  resetPatientsList,
  initialPatient,
} from "entities/Patient";
import { fetchServices } from "entities/Service";

export const useClearPatient = () => {
  const dispatch = useAppDispatch();

  const clearPatient = (): void => {
    dispatch(fetchPatient(initialPatient));
    dispatch(fetchServices([]));
    dispatch(resetPatientsList([]));
  };

  return { clearPatient };
};

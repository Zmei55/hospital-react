import { useAppDispatch } from "shared";
import {
  fetchPatient,
  resetPatientsList,
  clearInitialPatient,
} from "entities/Patient";
import { fetchServices } from "entities/Services";

export const useClearPatient = () => {
  const dispatch = useAppDispatch();

  const clearPatient = (): void => {
    dispatch(fetchPatient(clearInitialPatient));
    dispatch(fetchServices([]));
    dispatch(resetPatientsList([]));
  };

  return { clearPatient };
};

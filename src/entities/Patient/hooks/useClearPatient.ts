import { useAppDispatch } from "shared";
import {
  fetchPatient,
  resetPatientsList,
  IClearInitialPatient,
} from "entities/Patient";
import { fetchServices } from "entities/Services";

export const useClearPatient = (initialValue: IClearInitialPatient) => {
  const dispatch = useAppDispatch();

  const clearPatient = (): void => {
    dispatch(fetchPatient(initialValue));
    dispatch(fetchServices([]));
    dispatch(resetPatientsList([]));
  };

  return { clearPatient };
};

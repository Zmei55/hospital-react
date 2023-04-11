import { useAppDispatch } from "shared";
import { fetchPatient, IClearInitialPatient } from "entities/Patient";

export const useClearPatient = (initialValue: IClearInitialPatient) => {
  const dispatch = useAppDispatch();

  const clearPatient = (): void => {
    dispatch(fetchPatient(initialValue));
  };

  return [clearPatient];
};

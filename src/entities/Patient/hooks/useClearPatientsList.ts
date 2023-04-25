import { useAppDispatch } from "shared";
import { resetPatientsList } from "entities/Patient";

export const useClearPatientsList = () => {
  const dispatch = useAppDispatch();

  const clearPatientsList = (): void => {
    dispatch(resetPatientsList([]));
  };

  return { clearPatientsList };
};

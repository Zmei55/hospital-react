import { useClearPatientsList } from "entities/Patient";

export const useHandleResetPatientsList = () => {
  const [clearPatientsList] = useClearPatientsList();

  const handleResetPatientsList = () => {
    clearPatientsList();
  };

  return [handleResetPatientsList];
};

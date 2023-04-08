import { useState } from "react";
import { useClearPatientsList } from "entities/Patient";

export const useToggleModal = (
  initialValue: boolean
): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);
  const [clearPatientsList] = useClearPatientsList();

  const toggle = () => {
    setValue(!value);
    clearPatientsList();
  };

  return [value, toggle];
};

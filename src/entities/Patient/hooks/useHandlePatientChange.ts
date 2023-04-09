import { useState } from "react";
import { ISearchPatientState } from "entities/Patient";

export const useHandlePatientChange = (initialValue: ISearchPatientState) => {
  const [formState, setFormState] = useState(initialValue);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => setFormState(prev => ({ ...prev, [name]: value }));

  return { formState, handleChange };
};

import { useState } from "react";
import { ISearchState } from "entities/Patient";

export const useHandlePatientChange = (initialValue: ISearchState) => {
  const [formState, setFormState] = useState(initialValue);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => setFormState(prev => ({ ...prev, [name]: value }));

  return { formState, setFormState, handleChange };
};

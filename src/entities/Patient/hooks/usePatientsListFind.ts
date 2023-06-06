import { useState } from "react";
import { useAppDispatch } from "shared";
import {
  useFetchPatientByNameMutation,
  addPatientsList,
  resetPatientsList,
  initialSearchPatientState,
} from "entities/Patient";

export const usePatientsListFind = () => {
  const dispatch = useAppDispatch();
  const [fetchPatientsList, { isLoading, isError }] =
    useFetchPatientByNameMutation();
  const [formState, setFormState] = useState(initialSearchPatientState);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => setFormState(prev => ({ ...prev, [name]: value }));

  const handlePatientsListFind = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const patientsList = await fetchPatientsList(formState);
      dispatch(addPatientsList(patientsList));
    } catch (error) {
      console.log("ERROR patientsListFormSubmit");
    }
  };

  const resetPatients = () => {
    dispatch(resetPatientsList());
  };

  return {
    formState,
    handleChange,
    resetPatients,
    handlePatientsListFind,
    isLoading,
    isError,
  };
};

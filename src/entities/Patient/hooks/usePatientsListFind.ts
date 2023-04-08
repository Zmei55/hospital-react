import { useState } from "react";
import { useAppDispatch, useAppSelector } from "shared/types";
import {
  useFetchPatientByNameMutation,
  fetchPatientByName,
  IPatient,
} from "entities/Patient";

export const usePatientsListFind = (): [
  { name: string; birthDate: string; cardNumber: string },
  React.ChangeEventHandler<HTMLInputElement>,
  (event: React.SyntheticEvent) => Promise<void>,
  boolean,
  IPatient[]
] => {
  const dispatch = useAppDispatch();
  const patientsList = useAppSelector(state => state.patients.patients);
  const [fetchPatientsList, { isLoading }] = useFetchPatientByNameMutation();
  const [formState, setFormState] = useState({
    name: "",
    birthDate: "",
    cardNumber: "",
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => setFormState(prev => ({ ...prev, [name]: value }));

  const handlePatientsListFind = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const patientsList = await fetchPatientsList(formState);
      dispatch(fetchPatientByName(patientsList));
    } catch (error) {
      console.log("ERROR patientsListFormSubmit");
    }
  };

  return [
    formState,
    handleChange,
    handlePatientsListFind,
    isLoading,
    patientsList,
  ];
};

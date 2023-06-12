import { useState, useEffect } from "react";
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
  const [searchQuery, setSearchQuery] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    cardNumber: "",
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => setFormState(prev => ({ ...prev, [name]: value }));

  useEffect(() => {
    const name = formState.name.split(" ");
    setSearchQuery({
      firstName: name[0] !== undefined ? name[0] : "",
      lastName: name[1] !== undefined ? name[1] : "",
      birthDate: formState.birthDate,
      cardNumber: formState.cardNumber,
    });
  }, [formState]);

  const handlePatientsListFind = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const patientsList = await fetchPatientsList(searchQuery);
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

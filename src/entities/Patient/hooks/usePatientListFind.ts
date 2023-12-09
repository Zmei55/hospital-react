import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import {
  useFetchPatientByFilterMutation,
  ISearchPatientState,
  IPatient,
} from "entities/Patient";

export const usePatientListFind = () => {
  const [patientList, setPatientList] = useState<IPatient[] | null>(null);
  const [fetchPatientList, { isLoading, isError }] =
    useFetchPatientByFilterMutation();

  const handlePatientListFind: SubmitHandler<
    ISearchPatientState
  > = async data => {
    try {
      const patientListResponse = await fetchPatientList(data).unwrap();
      setPatientList(patientListResponse);
    } catch (error) {
      console.log("ERROR patientListFormSubmit");
    }
  };

  const resetPatients = () => {
    setPatientList(null);
  };

  return {
    patientList,
    handlePatientListFind,
    isLoading,
    isError,
    resetPatients,
  };
};

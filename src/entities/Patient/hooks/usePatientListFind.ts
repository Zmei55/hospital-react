import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import {
  useFetchPatientByFilterMutation,
  TPatient,
  TPatientFilter,
} from "entities/Patient";

export const usePatientListFind = () => {
  const [patientList, setPatientList] = useState<TPatient[] | null>(null);
  const [fetchPatientList, { isLoading, isError }] =
    useFetchPatientByFilterMutation();

  const handlePatientListFind: SubmitHandler<TPatientFilter> = async data => {
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

import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import {
  useFetchPatientByFilterMutation,
  ISearchPatientState,
  IPatient,
} from "entities/Patient";

export const usePatientsListFind = () => {
  const [patientList, setPatientList] = useState<IPatient[]>([]);
  const [fetchPatientsList, { isLoading, isError }] =
    useFetchPatientByFilterMutation();

  const handlePatientsListFind: SubmitHandler<
    ISearchPatientState
  > = async data => {
    const name = data.name.split(" ");
    const formData = new FormData();
    formData.append("firstName", name[0]);
    if (name[1] === undefined) {
      formData.append("lastName", "");
    } else {
      formData.append("lastName", name[1]);
    }
    formData.append("birthDate", data.birthDate.toString());
    formData.append("cardNumber", data.cardNumber);

    try {
      const patientsListResponse = await fetchPatientsList(formData).unwrap();
      setPatientList(patientsListResponse);
    } catch (error) {
      console.log("ERROR patientsListFormSubmit");
    }
  };

  const resetPatients = () => {
    setPatientList([]);
  };

  return {
    patientList,
    handlePatientsListFind,
    isLoading,
    isError,
    resetPatients,
  };
};

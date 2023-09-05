import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "shared";
import {
  useFetchPatientByNameMutation,
  addPatientsList,
  resetPatientsList,
  ISearchPatientState,
} from "entities/Patient";

export const usePatientsListFind = () => {
  const dispatch = useAppDispatch();
  const [fetchPatientsList, { isLoading, isError }] =
    useFetchPatientByNameMutation();

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
      dispatch(addPatientsList(patientsListResponse));
    } catch (error) {
      console.log("ERROR patientsListFormSubmit");
    }
  };

  const resetPatients = () => {
    dispatch(resetPatientsList());
  };

  return {
    resetPatients,
    handlePatientsListFind,
    isLoading,
    isError,
  };
};

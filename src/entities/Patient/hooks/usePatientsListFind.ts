import { useAppDispatch } from "shared";
import {
  useFetchPatientByNameMutation,
  fetchPatientByName,
  ISearchPatientState,
} from "entities/Patient";

export const usePatientsListFind = (formState: ISearchPatientState) => {
  const dispatch = useAppDispatch();

  const [fetchPatientsList, { isLoading }] = useFetchPatientByNameMutation();

  const handlePatientsListFind = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const patientsList = await fetchPatientsList(formState);
      dispatch(fetchPatientByName(patientsList));
    } catch (error) {
      console.log("ERROR patientsListFormSubmit");
    }
  };

  return { handlePatientsListFind, isLoading };
};

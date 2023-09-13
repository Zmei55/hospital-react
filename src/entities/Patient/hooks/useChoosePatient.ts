import { useAppDispatch } from "shared";
import {
  useLazyFetchPatientByIdQuery,
  addPatient,
  fetchPatientsModal,
  usePatientsListFind,
} from "entities/Patient";

export const useChoosePatient = () => {
  const dispatch = useAppDispatch();
  const [fetchPatient] = useLazyFetchPatientByIdQuery();
  const { resetPatients } = usePatientsListFind();

  const choosePatient = async (id: string) => {
    const patientResponse = await fetchPatient(id).unwrap();
    dispatch(addPatient(patientResponse));
    resetPatients();
    dispatch(fetchPatientsModal(false));
  };

  return { choosePatient };
};

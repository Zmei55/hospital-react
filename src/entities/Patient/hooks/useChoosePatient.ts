import { useAppDispatch } from "shared";
import {
  useLazyFetchPatientByIdQuery,
  addPatient,
  fetchPatientsModal,
  usePatientListFind,
} from "entities/Patient";

export const useChoosePatient = () => {
  const dispatch = useAppDispatch();
  const [fetchPatient] = useLazyFetchPatientByIdQuery();
  const { resetPatients } = usePatientListFind();

  const choosePatient = async (id: string | number | null) => {
    if (id) {
      const patientResponse = await fetchPatient(id).unwrap();
      dispatch(addPatient(patientResponse));
      resetPatients();
      dispatch(fetchPatientsModal(false));
    }
  };

  return { choosePatient };
};

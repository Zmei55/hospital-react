import { useAppDispatch } from "shared";
import {
  IPatient,
  addPatient,
  fetchPatientsModal,
  usePatientsListFind,
} from "entities/Patient";
import { addRequestPatientID } from "entities/Request";

export const useChoosePatient = () => {
  const dispatch = useAppDispatch();
  const { resetPatients } = usePatientsListFind();

  const choosePatient = (patient: IPatient) => {
    dispatch(addRequestPatientID(patient._id));
    dispatch(addPatient(patient));
    resetPatients();
    dispatch(fetchPatientsModal(false));
  };

  return { choosePatient };
};

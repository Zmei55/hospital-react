import { useState, useEffect } from "react";
import { useAppDispatch } from "shared";
import {
  useFetchPatientByIdQuery,
  fetchPatientsModal,
  useTogglePatientsModal,
  fetchPatient,
} from "entities/Patient";

export const useChoosePatient = (initialValue: string) => {
  const dispatch = useAppDispatch();
  const [patientId, setPatientId] = useState<string>(initialValue);
  const { data: patient } = useFetchPatientByIdQuery(patientId, {
    skip: patientId === "",
  });
  const { showModal } = useTogglePatientsModal();

  useEffect(() => {
    if (patient !== undefined) {
      dispatch(fetchPatient(patient));
    }
  }, [dispatch, patient]);

  const choosePatient = (event: string) => {
    dispatch(fetchPatientsModal(showModal));
    setPatientId(event);
  };

  return { choosePatient };
};

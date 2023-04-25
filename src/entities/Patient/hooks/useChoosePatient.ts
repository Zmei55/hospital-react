import { useState, useEffect } from "react";
import { useAppDispatch } from "shared";
import {
  useFetchPatientByIdQuery,
  useClearPatientsList,
  fetchPatient,
} from "entities/Patient";

export const useChoosePatient = (initialValue: string) => {
  const dispatch = useAppDispatch();
  const [patientId, setPatientId] = useState<string>(initialValue);
  const { data: patient } = useFetchPatientByIdQuery(patientId, {
    skip: patientId === "",
  });
  const { clearPatientsList } = useClearPatientsList();

  useEffect(() => {
    if (patient !== undefined) {
      dispatch(fetchPatient(patient));
    }
  }, [dispatch, patient]);

  const choosePatient = (event: string) => {
    setPatientId(event);
    clearPatientsList();
  };

  return { choosePatient };
};

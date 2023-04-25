import { useState, useEffect } from "react";
import { useAppDispatch } from "shared";
import { useFetchPatientByIdQuery, fetchPatient } from "entities/Patient";

export const useChoosePatient = (initialValue: string) => {
  const dispatch = useAppDispatch();
  const [patientId, setPatientId] = useState<string>(initialValue);
  const { data: patient } = useFetchPatientByIdQuery(patientId, {
    skip: patientId === "",
  });

  useEffect(() => {
    if (patient !== undefined) {
      dispatch(fetchPatient(patient));
    }
  }, [dispatch, patient]);

  const choosePatient = (event: string) => {
    setPatientId(event);
  };

  return { choosePatient };
};

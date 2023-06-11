import { useEffect, useState } from "react";

import { useAppDispatch } from "shared";
import {
  useFetchPatientByIdQuery,
  addPatient,
  fetchPatientsModal,
  usePatientsListFind,
} from "entities/Patient";
import { addRequestPatientID } from "entities/Request";

export const useChoosePatient = () => {
  const dispatch = useAppDispatch();
  const [patientId, setPatientId] = useState("");
  const { data: patientData } = useFetchPatientByIdQuery(patientId, {
    skip: patientId === "",
  });
  const { resetPatients } = usePatientsListFind();

  useEffect(() => {
    if (patientData !== undefined) {
      dispatch(addPatient(patientData));
      resetPatients();
      dispatch(fetchPatientsModal(false));
    }
  }, [dispatch, patientData, resetPatients]);

  const choosePatient = (id: string) => {
    setPatientId(id);
    dispatch(addRequestPatientID(id));
  };

  return { choosePatient };
};

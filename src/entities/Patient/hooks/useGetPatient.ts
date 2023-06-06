import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "shared";
import { useFetchPatientByIdQuery, addPatient } from "entities/Patient";

export const useGetPatient = () => {
  const dispatch = useAppDispatch();
  const patientID = useAppSelector(state => state.request.patientId);
  const patient = useAppSelector(state => state.patients.patient);
  const { data: patientData } = useFetchPatientByIdQuery(patientID, {
    skip: patientID === "",
  });

  useEffect(() => {
    if (patientData !== undefined) {
      dispatch(addPatient(patientData));
    }
  }, [dispatch, patientData]);

  return { patient };
};

// ??????! Не используется

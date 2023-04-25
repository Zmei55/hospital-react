import {
  PatientInfo,
  PatientSearch,
  useGetPatient,
  initialPatient,
} from "entities/Patient";

import { Container } from "./Patient.styled";

export function Patient() {
  const { getPatient, patient } = useGetPatient(initialPatient);

  return (
    <Container>
      {getPatient._id === "" ? (
        <PatientSearch />
      ) : (
        <PatientInfo patient={patient} />
      )}
    </Container>
  );
}

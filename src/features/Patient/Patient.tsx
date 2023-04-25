import { PatientInfo, PatientSearch } from "entities/Patient";
import { useAppSelector } from "shared";

import { Container } from "./Patient.styled";

export function Patient() {
  const patient = useAppSelector(state => state.patients.patient);

  return (
    <Container>
      {patient._id === "" ? <PatientSearch /> : <PatientInfo />}
    </Container>
  );
}

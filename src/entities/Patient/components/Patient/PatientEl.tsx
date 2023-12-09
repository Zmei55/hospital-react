import { InfoEl, SearchEl } from "entities/Patient";
import { useAppSelector } from "shared";

import { Container } from "./PatientEl.styled";

export function PatientEl() {
  const patient = useAppSelector(state => state.patients.patient);

  return (
    <Container data-testid="patient-container">
      {!patient ? <SearchEl /> : <InfoEl />}
    </Container>
  );
}

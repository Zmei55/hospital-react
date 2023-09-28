import { InfoEl, SearchEl } from "entities/Patient";
import { useAppSelector } from "shared";

import { Container } from "./PatientEl.styled";

export function PatientEl() {
  const patient = useAppSelector(state => state.patients.patient);

  return (
    <Container>{patient._id === "" ? <SearchEl /> : <InfoEl />}</Container>
  );
}

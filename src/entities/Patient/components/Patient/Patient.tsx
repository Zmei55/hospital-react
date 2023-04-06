import { useState, useEffect } from "react";
import { useAppSelector } from "shared/types";
import { PatientInfo, PatientSearch, IPatient } from "entities/Patient";

import { Container } from "./Patient.styled";

const initialPatient: IPatient = {
  _id: "",
  name: "",
  birthDate: "",
  cardNumber: 0,
  gender: "",
  phoneNumber: "",
  email: "",
  identityDocument: "",
  residenceAddress: {
    street: "",
    houseNumber: "",
    city: "",
    postcode: "",
  },
  services: [],
  containers: [],
};

export function Patient() {
  const getPatient = useAppSelector(state => state.app.patient);
  const [patient, setPatient] = useState(initialPatient);

  useEffect(() => {
    if (getPatient._id !== "") setPatient(getPatient);
  }, [getPatient]);

  return (
    <Container>
      {patient._id ? <PatientInfo patient={patient} /> : <PatientSearch />}
    </Container>
  );
}

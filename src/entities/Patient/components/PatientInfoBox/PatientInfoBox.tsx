import { patientInfo } from "entities/Patient";
import { useAppSelector } from "shared";

import {
  BasicInformationBox,
  BackgroundInformationBox,
  Box,
  Header,
  Body,
} from "./PatientInfoBox.styled";

interface IPatientInfoBox {}

export const PatientInfoBox: React.FC<IPatientInfoBox> = () => {
  const patient = useAppSelector(state => state.patients.patient);
  const isInfoActive = useAppSelector(
    state => state.patients.isActivePatientInfo
  );
  const {
    dateOfBirth,
    gender,
    cardNumber,
    phoneNumber,
    email,
    identityDocument,
    residence,
  } = patientInfo(patient);

  return (
    <>
      <BasicInformationBox>
        <Box>
          <Header>Geburtsdatum</Header>
          <Body>{dateOfBirth}</Body>
        </Box>

        <Box>
          <Header>Geschlecht</Header>
          <Body>{gender}</Body>
        </Box>

        <Box>
          <Header>Kennnummer</Header>
          <Body>{cardNumber}</Body>
        </Box>

        <Box>
          <Header>Telefonnummer</Header>
          <Body>{phoneNumber}</Body>
        </Box>

        <Box>
          <Header>E-mail</Header>
          <Body>{email}</Body>
        </Box>
      </BasicInformationBox>

      {isInfoActive && (
        <BackgroundInformationBox>
          <Box>
            <Header>Ausweis</Header>
            <Body>{identityDocument}</Body>
          </Box>

          <Box>
            <Header>Wohnort</Header>
            <Body>{residence}</Body>
          </Box>
        </BackgroundInformationBox>
      )}
    </>
  );
};

import { useAppSelector } from "shared/types";
import {
  useHandleInfoActive,
  useClearPatient,
  patientInfo,
  clearInitialPatient,
  IPatientInfo,
} from "entities/Patient";

import {
  NameBlock,
  InfoButton,
  IconInfoActive,
  IconInfoInactive,
  PatientName,
  PatientClearBtn,
  BasicInformationBox,
  BackgroundInformationBox,
  InfoBox,
  InfoHeader,
  InfoBody,
} from "./PatientInfo.styled";

export function PatientInfo({ patient }: IPatientInfo) {
  const [clearPatient] = useClearPatient(clearInitialPatient);
  const [handleInfoActive] = useHandleInfoActive();
  const isActive = useAppSelector(state => state.patient.isActivePatientInfo);
  const {
    name,
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
      <NameBlock>
        <InfoButton type="button" onClick={handleInfoActive}>
          {isActive ? <IconInfoInactive /> : <IconInfoActive />}
        </InfoButton>
        <PatientName>{name}</PatientName>
        <PatientClearBtn type="button" onClick={clearPatient}></PatientClearBtn>
      </NameBlock>
      <BasicInformationBox>
        <InfoBox>
          <InfoHeader>Geburtsdatum</InfoHeader>
          <InfoBody>{dateOfBirth}</InfoBody>
        </InfoBox>
        <InfoBox>
          <InfoHeader>Geschlecht</InfoHeader>
          <InfoBody>{gender}</InfoBody>
        </InfoBox>
        <InfoBox>
          <InfoHeader>Kennnummer</InfoHeader>
          <InfoBody>{cardNumber}</InfoBody>
        </InfoBox>
        <InfoBox>
          <InfoHeader>Telefonnummer</InfoHeader>
          <InfoBody>{phoneNumber}</InfoBody>
        </InfoBox>
        <InfoBox>
          <InfoHeader>E-mail</InfoHeader>
          <InfoBody>{email}</InfoBody>
        </InfoBox>
      </BasicInformationBox>
      {isActive && (
        <BackgroundInformationBox>
          <InfoBox>
            <InfoHeader>Ausweis</InfoHeader>
            <InfoBody>{identityDocument}</InfoBody>
          </InfoBox>
          <InfoBox>
            <InfoHeader>Wohnort</InfoHeader>
            <InfoBody>{residence}</InfoBody>
          </InfoBox>
        </BackgroundInformationBox>
      )}
    </>
  );
}

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "shared/types";
import {
  fetchIsActivePatientInfo,
  fetchPatient,
  IPatientInfoEl,
  IClearInitialPatient,
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

const clearInitialPatient: IClearInitialPatient = {
  data: {
    result: {
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
    },
  },
};

export function PatientInfo({ patient }: IPatientInfoEl) {
  const dispatch = useAppDispatch();
  const [isInfoActive, setIsInfoActive] = useState<boolean>(false);
  const isActive = useAppSelector(state => state.patient.isActivePatientInfo);
  const {
    name,
    birthDate,
    gender,
    cardNumber,
    phoneNumber,
    email,
    identityDocument,
    residenceAddress,
  } = patient;

  useEffect(() => {
    dispatch(fetchIsActivePatientInfo(isInfoActive));
  }, [dispatch, isInfoActive]);

  const clearPatient = (): void => {
    dispatch(fetchPatient(clearInitialPatient));
  };

  const dateOfBirth = `${new Date(birthDate).getDate()}.
            ${new Date(birthDate).getMonth().toString().padStart(2, "0")}.
            ${new Date(birthDate).getFullYear()}
            `;
  const residence = `
            ${residenceAddress.street}, 
            ${residenceAddress.houseNumber}, 
            ${residenceAddress.postcode}, 
            ${residenceAddress.city}
            `;

  const handleInfoActive: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsInfoActive(!isInfoActive);
  };

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

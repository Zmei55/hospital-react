import {
  useHandleInfoActive,
  useClearPatient,
  patientInfo,
} from "entities/Patient";
import {
  useAppSelector,
  Button as InfoBtn,
  Button as ClearBtn,
  Icon,
} from "shared";

import {
  BasicInformationBox,
  BackgroundInformationBox,
  NameBlock,
  Name,
  InfoBox,
  InfoHeader,
  InfoBody,
} from "./InfoEl.styled";

interface IInfo {}

export const InfoEl: React.FC<IInfo> = () => {
  const patient = useAppSelector(state => state.patients.patient);
  const { clearPatient } = useClearPatient();
  const { isInfoActive, handleInfoActive } = useHandleInfoActive();
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
      <NameBlock>
        <InfoBtn
          id="morePatInfoBtn"
          style={{
            width: "48px",
            height: "48px",
            marginRight: "24px",
          }}
          background="transparent"
          name={"InfoButton"}
          onClick={handleInfoActive}
        >
          {isInfoActive ? (
            <Icon icon="caret-double-up-bold" size={24} color="grey" />
          ) : (
            <Icon icon="caret-double-down-bold" size={24} color="grey" />
          )}
        </InfoBtn>

        <Name>
          {patient.firstName} {patient.lastName}
        </Name>

        <ClearBtn
          id="clearPatInfo"
          background="transparent"
          style={{
            width: "48px",
            height: "48px",
          }}
          name="ClearButton"
          onClick={clearPatient}
        >
          <Icon icon="cross-bold" size={24} color="red" />
        </ClearBtn>
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

      {isInfoActive && (
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
};

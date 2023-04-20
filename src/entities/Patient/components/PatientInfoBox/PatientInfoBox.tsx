import {
  BasicInformationBox,
  BackgroundInformationBox,
  InfoBox,
  InfoHeader,
  InfoBody,
} from "./PatientInfoBox.styled";

interface IPatientInfoBox {
  dateOfBirth: string;
  gender: string;
  cardNumber: number;
  phoneNumber: string;
  email: string;
  identityDocument: string;
  residence: string;
  isInfoActive: boolean;
}

export const PatientInfoBox: React.FC<IPatientInfoBox> = ({
  dateOfBirth,
  gender,
  cardNumber,
  phoneNumber,
  email,
  identityDocument,
  residence,
  isInfoActive,
}) => {
  return (
    <>
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

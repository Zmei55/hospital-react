import {
  BasicInformationBox,
  BackgroundInformationBox,
  Box,
  Header,
  Body,
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

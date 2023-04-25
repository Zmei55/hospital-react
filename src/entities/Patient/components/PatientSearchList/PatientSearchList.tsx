import { useChoosePatient, IPatient, showBirthDate } from "entities/Patient";
import {
  PatientsList,
  ListHeader,
  HeadName,
  HeadBirthDay,
  HeadCardNumber,
  HeadSelectBtn,
  ListBody,
  ListItem,
  BodyName,
  BodyBirthDay,
  BodyCardNumber,
  BodySelectBtn,
  SelectBtn,
} from "./PatientSearchList.styled";

interface IPatientSearchList {
  patientsList: IPatient[];
}

export const PatientSearchList: React.FC<IPatientSearchList> = ({
  patientsList,
}) => {
  const { choosePatient } = useChoosePatient("");

  return (
    <PatientsList>
      <ListHeader>
        <HeadName>Vorname und Name</HeadName>
        <HeadBirthDay>Geburtsdatum</HeadBirthDay>
        <HeadCardNumber>Kennnummer</HeadCardNumber>
        <HeadSelectBtn></HeadSelectBtn>
      </ListHeader>

      <ListBody>
        {patientsList.map(({ _id, name, birthDate, cardNumber }) => (
          <ListItem key={_id}>
            <BodyName>{name}</BodyName>
            <BodyBirthDay>{showBirthDate(birthDate)}</BodyBirthDay>
            <BodyCardNumber>{cardNumber}</BodyCardNumber>
            <BodySelectBtn>
              <SelectBtn onClick={() => choosePatient(_id)}>Select</SelectBtn>
            </BodySelectBtn>
          </ListItem>
        ))}
      </ListBody>
    </PatientsList>
  );
};
